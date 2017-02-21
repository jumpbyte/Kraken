require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
]);

require("lib/background").ready(function(info){
	var SecurityandBackgroundEntity = Entity({
	}, {
	});

	var data = SecurityandBackgroundEntity(info.data.SecurityandBackground1);
	form.set(data, function(){
		// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});