require("lib/jquery");
var dataTransfer = require("./data-transfer");
var options = require("./options");
var config = require("config");
var data = [];

module.exports = {
	get: function(callback){
		if(data.length){
			callback(data[0].data);
		}else{
			$.ajax({
				url: options.requestUrl || config["request-url"],
				dataType: "json"
			}).done(function(result){
				result.data = dataTransfer(result.data);
				Object.assign(result.data, {
					// home
					"Home": {
						"Location": "BEJ"
					},
					// secure-question
					"SecureQuestion": {
						"Questions": 1,
						"Answer": "CHINA"
					}
				});
				data.push(result);
				callback(data[0].data);
			});
		}
	},
	submit: function(acceptNum){
		if(data.length){
			var item = data.shift();
			$.ajax({
				url: options.submitUrl || config["submit-url"],
				data: {
					acceptNum: acceptNum,
					formId: item.formId,
					status: 1
				},
				dataType: "json",
				onSuccess: function(result){}
			});
		}
	}
};