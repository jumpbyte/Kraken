require("lib/jquery");
var dataTransfer = require("./data-transfer");
var options = require("./options");
var config = require("config");
var data = null;

module.exports = {
	request: function(params, callback){
		$.ajax({
			url: options.requestUrl || config["request-url"],
			dataType: "json",
			data: params
		}).done(function(result){
			result.data = dataTransfer(result.data);
			data = result;
			callback(data.data);
		});
	},
	get: function(callback){
		if(data){
			callback(data.data);
		}else{
			console.error("没有数据");
		}
	},
	submit: function(acceptNum, callback){
		if(data){
			$.ajax({
				url: options.submitUrl || config["submit-url"],
				data: {
					acceptNum: acceptNum,
					formId: data.formId,
					status: 1
				},
				dataType: "json"
			}).done(function(result){
				callback();
			});
		}
	}
};