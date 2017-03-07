require("lib/jquery");
var form = require("lib/form");
var Entity = require("lib/entity");
var params = require("lib/params");

module.exports = function(pageName, options){
	form.init(options.controls);

	function onReady(info){
		var data = info.data[pageName];
		if(typeof options === "function"){
			options(data);
		}else{
			if(!options.check || options.check(data)){
				var PageEntity = Entity(options.entity, options.hash);
				data = PageEntity(data);
				form.set(data, function(){
					if(info.options.autoNext && !$(".error-message").html().trim()){
						if(options.next){
							options.next();
						}else{
							$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
						}
					}
				});
			}
		}
	}

	if(pageName === "Home"){
		require("lib/background").init(params, onReady);
	}else{
		require("lib/background").ready(onReady);
	}
};