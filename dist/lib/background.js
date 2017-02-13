define("lib/background", function(require, exports, module){
// 连接背景页
var port = chrome.extension.connect({name: "background"});

var listeners = [];
var background = {
	ready: function(listener){
		listeners.push(listener);
	}
};

port.onMessage.addListener(function(msg) {
	// if(msg.isOpen && !$(".error-message").html().trim()){
	if(msg.isOpen){
		listeners.forEach(function(listener){
			listener(msg.info);
		});
	}
});

module.exports = background;
});

if(false){
	require("lib/background");
}