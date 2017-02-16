require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel1',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlUS_RELATIVES'
]);

require("lib/background").ready(function(info){
	var RelativesEntity = Entity({
	}, {
	});

	var data = RelativesEntity(info.data.Relatives);
	form.set(data, function(){
		// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});