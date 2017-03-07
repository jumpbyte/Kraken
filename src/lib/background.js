module.exports = {
	init: function(params, callback){
		chrome.extension.sendRequest({
			name: "request-data",
			params: params
		}, function(msg) {
			callback(msg);
		});
	},
	ready: function(callback){
		chrome.extension.sendRequest({
			name: "get-data"
		}, function(msg) {
			callback(msg);
		});
	},
	submit: function(acceptNum, callback){
		chrome.extension.sendRequest({
			name: "complete",
			acceptNum: acceptNum
		}, function(msg) {
			if(msg.ok){
				callback();
			}
		});
	}
};