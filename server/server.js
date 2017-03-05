var express = require('express');
var app = express();
var Mime = require("mime");
var fs = require("fs");
var path = require("path");

app.get("/data", function(req, res) {
	fs.readFile(path.join(__dirname, "data.json"), null, function(err, content){
		res.set("Content-Type", Mime.lookup("json"));
		res.send(content);
	});
});

app.get("/submit", function(req, res) {
	res.set("Content-Type", Mime.lookup("json"));
	res.send(JSON.stringify({
		error: false
	}));
});