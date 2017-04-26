require("lib/jquery");
require("lib/md5");
var dataTransfer = require("./data-transfer");
var options = require("./options");
var config = require("config");
var data = null;

module.exports = {
	request: function(params, callback){
		$.ajax({
			url: options.requestUrl || config["request-url"],
			dataType: "json",
			data: {
				formId: params.formId,
				key: md5(params.formId + options.md5Key),
				t:new Date().getTime()
			}
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
	bindAppId: function(appId){
		if(data){
			data.appId = appId;
		}
	},
	submit: function(acceptNum, callback){
		if(data){
			$.ajax({
				url: options.submitUrl || config["submit-url"],
				data: {
					acceptNum: data.appId,
					formId: data.formId,
					status: 1,
					key: md5(data.appId + data.formId + options.md5Key)
				},
				dataType: "json"
			}).done(function(result){
				callback();
			});
		}
	}
};