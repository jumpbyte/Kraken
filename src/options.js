// @entry
require("lib/jquery");
var options = require("background/options");
var config = require("config");

$("#auto-next")
	.prop("checked", options.autoNext)
	.on("change", function(){
		options.autoNext = $(this).prop("checked")
	});

$("#request-url")
	.val(options.requestUrl)
	.attr("placeholder", config["request-url"])
	.on("keyup", function(){
		options.requestUrl = $(this).val();
	});

$("#submit-url")
	.val(options.submitUrl)
	.attr("placeholder", config["submit-url"])
	.on("keyup", function(){
		options.submitUrl = $(this).val();
	});

$("#md5-key")
	.val(options.md5Key)
	.attr("placeholder", config["md5-key"])
	.on("keyup", function(){
		options.md5Key = $(this).val();
	});