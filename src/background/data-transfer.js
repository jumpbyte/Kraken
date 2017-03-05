module.exports = function(data){
	var ViewModule = {};

	[
		"personal",
		"address-phone",
		"passport",
		"travel",
		"travel-companions",
		"previous-us-travel",
		"us-contact",
		"relatives",
		"spouse",
		"prev-spouse",
		"work-education",
		"securityand-background"
	].forEach(function(name){
		Object.assign(ViewModule, require("background/data-transfer/" + name + ".js")(data));
	});

	return ViewModule;
};