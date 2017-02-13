define("background/background", function(require, exports, module){
var Switch = require("background/switch");
var data = require("background/data");

// 连接content页面
chrome.runtime.onConnect.addListener(function(port) {
    switch(port.name){
        case "background":
            data.get(function(data){
                port.postMessage({
                    // 是否启用
                    isOpen: Switch.isOpen,
                    info: {
                        // 用户信息
                        data: data
                    }
                });
            });
            port.onMessage.addListener(function(msg){
                switch(msg.name){
                    case "complete":
                        // 完成一个人的填写后，删除
                        data.remove();
                        break;
                }
            });
            break;
    }
});
});

if(true){
	require("background/background");
}