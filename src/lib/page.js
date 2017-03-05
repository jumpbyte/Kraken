require("lib/jquery");
var form = require("lib/form");
var Entity = require("lib/entity");


module.exports = function(pageName, options){
	form.init(options.controls);

	require("lib/background").ready(function(info){
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
	});
};