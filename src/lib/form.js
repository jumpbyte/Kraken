require("./ms-ajax");
require("./ms-ajax-webform");
var Type = require("./type");
var asyncList = require("./async-list");
var queue = require("./queue");

var forms = document.forms["aspnetForm"];

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
	_set: function(name, value, indexs){
		indexs = indexs || [];
		name = name.replace(/\{(\d+)\}/g, function(all, key){
			return indexs[key];
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
			}else{
				$(form).remove();
			}
		}

		$('<input name="' + name + '" value="' + value + '" />').appendTo(forms);
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
				}else if(item.type === Type.Enum){
					this._set(item.name, item.value, indexs);
					this.event(typeof item["event-target"] === "string" ? item["event-target"] : item["event-target"][item.value], function(){
						if(item.subs){
							this.set(item.subs, callback, indexs);
						}else{
							callback();
						}
					}.bind(this), indexs);
				}else if(item.type === Type.Date || item.type === Type.DateEn || item.type === Type.DateS){
					this._set(item.name.Year, item.value.Year, indexs);
					this._set(item.name.Month, item.value.Month, indexs);
					this._set(item.name.Day, item.value.Day, indexs);
					callback();
				}else{
					this._set(item.name, item.value, indexs);
					callback();
				}
			}.bind(this);
		}.bind(this)), callback);
		return this;
	}
};