require("./ms-ajax");
require("./ms-ajax-webform");
var Type = require("./type");
var asyncList = require("./async-list");
var queue = require("./queue");

var forms = document.forms["aspnetForm"];
window.theForm=forms;
window.__doPostBack=function(eventTarget, eventArgument){
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
var Form = module.exports = {
	init: function(controls){
		Sys.WebForms.PageRequestManager._initialize('ctl00$ScriptManager1', forms);
		var instance = Sys.WebForms.PageRequestManager.getInstance();
		instance._updateControls(controls, [], [], 180);
		return this;
	},
	// get: function(){
	// 	return $("form").serialize();
	// },
	eventing: false,
	_events: [],
	_event: function(data, callback){
		if(this.eventing){
			this._events.push([data, callback]);
		}else{
			this.eventing = true;
			Sys.WebForms.PageRequestManager.getInstance()._doPostBack(data.__EVENTTARGET, "", function(){
				callback && callback.call(this);
				this.eventing = false;
				var argus = null;
				if(this._events.length){
					argus = this._events.shift();
					this._event(argus[0], argus[1]);
				}
			}.bind(this));
		}
		return this;
	},
	event: function(__EVENTTARGET, callback, indexs){
		indexs = indexs || [];

		if(__EVENTTARGET){
			__EVENTTARGET = __EVENTTARGET.replace(/\{(\d+)\}/g, function(all, key){
				return indexs[key];
			});
			return this._event({
				__EVENTTARGET: __EVENTTARGET
			}, callback);
		}else{
			callback && callback.call(this);
			return this;
		}
	},
	_set: function(name, value, indexs, optional){
		indexs = indexs || [];
		name = name.replace(/0\{(\d+)\}/g, function(all, key){
			if(indexs[key]<10){
				return "0"+indexs[key];
			}else{
				return indexs[key];
			}
		});

		var form = forms[name];
		if(form){
			if(form.type === "checkbox" && !form.length){
				// 勾选
				$(form).prop("checked", !!value);
				return;
			}else if(form.tagName && form.tagName !== "INPUT" || !form.length && (!form.type || ["radio", "checkbox"].indexOf(form.type) === -1)){
				// 单个值
				$(form).val(value);
				return;
			}else if(form.length){
				(function(items){
					for(var i = 0, l = items.length; i < l; i ++){
						if(items[i].value == value){
							$(items[i]).prop("checked", true);
							break;
						}
					}
				})(form);
				return;
			}else{
				$(form).remove();
			}
		}else if(optional){
			return true;
		}

		// $('<input name="' + name + '" value="' + value + '" />').appendTo(forms);
	},
	set: function(data, callback, indexs){
		indexs = indexs || [];

		queue(Object.keys(data).map(function(name){
			return function(callback){
				var item = data[name];
				if(item.type === Type.Array){
					asyncList(item.value.map(function(value, index){
						return function(callback){
							if(index === 0){
								this.set(value, callback, indexs.concat(index));
							}else{
								this.event(item["event-target"], function(){
									this.set(value, callback, indexs.concat(index));
								}.bind(this), indexs.concat(index));
							}
						}.bind(this);
					}.bind(this))).complete(callback);
				}else if(item.type === Type.Enum || item.type === Type.YN){
					var noForm = this._set(item.name, item.value, indexs, item.optional);
					if(noForm){
						item.value = item.optional;
						delete item["event-target"];
					}
					(function(){
						var setSubs = function(){
							if(item.subs){
								this.set(item.subs, callback, indexs);
							}else{
								callback();
							}
						}.bind(this);
						var eventTarget = item["event-target"];
						if(eventTarget){
							if(typeof eventTarget === "string"){
								this.event(eventTarget, setSubs, indexs);
							}else if(typeof eventTarget === "function"){
								eventTarget();
								setSubs();
							}else{
								eventTarget = eventTarget[item.value];
								if(typeof eventTarget === "string"){
									this.event(eventTarget, setSubs, indexs);
								}else if(typeof eventTarget === "function"){
									eventTarget();
									setSubs();
								}else{
									setSubs()
								}
							}
						}else{
							setSubs();
						}
					}.bind(this))();
				}else if(item.type === Type.Date || item.type === Type.DateEn || item.type === Type.DateS){
					this._set(item.name.Year, item.value.Year, indexs);
					this._set(item.name.Month, item.value.Month, indexs);
					this._set(item.name.Day, item.value.Day, indexs);
					callback();
				}else{
					this._set(
						item.name,
						typeof item.value === "string" ?
							item.value.trim()
								:
							item.value === 0 ?
								"0"
									:
								(item.value || ""),
						indexs
					);
					if(item["event-target"]){
						this.event(item["event-target"], function(){
							if(item.sub){
								this.set(item.sub, callback, indexs);
							}else{
								callback();
							}
						}.bind(this), indexs);
					}else{
						callback();
					}
				}
			}.bind(this);
		}.bind(this)), callback);
		return this;
	}
};