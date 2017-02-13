require("lib/jquery");
var form = require("lib/form");
var hashData = require("lib/hashData");
require("lib/background").ready(function(info){
	var hash = {
	};
	var data = hashData(info.data, hash);
	form.set(data);
	$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
});