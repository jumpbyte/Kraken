require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
]);

require("lib/background").ready(function(info){
	var WorkEducationEntity = Entity({
	}, {
	});

	var data = WorkEducationEntity(info.data.WorkEducation);
	form.set(data, function(){
		// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});