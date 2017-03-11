module.exports = function(data){
	var ViewModule = {
		// home
		"Home": {
			"Location": "BEJ"
		}
	};

	[
		require("./data-transfer/secure-question"),
		require("./data-transfer/personal"),
		require("./data-transfer/address-phone"),
		require("./data-transfer/passport"),
		require("./data-transfer/travel"),
		require("./data-transfer/travel-companions"),
		require("./data-transfer/previous-us-travel"),
		require("./data-transfer/us-contact"),
		require("./data-transfer/relatives"),
		require("./data-transfer/spouse"),
		require("./data-transfer/prev-spouse"),
		require("./data-transfer/deceased-spouse"),
		require("./data-transfer/work-education"),
		require("./data-transfer/securityand-background")
	].forEach(function(module){
		Object.assign(ViewModule, module(data));
	});

	return ViewModule;
};