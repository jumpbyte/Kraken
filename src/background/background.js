// @entry
var Switch = require("./switch");
var Options = require("./options");
var data = require("./data");

var formIdCache = {};

// 连接content页面
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    function onData(data){
        sendResponse({
            options: {
                autoNext: Options.autoNext
            },
            // 用户信息
            data: data
        });
    }

    if(Switch.isOpen || request.name==="complete"){
        switch(request.name){
            case "request-data":
                if(request.params.formId && request.params.formId !== formIdCache[sender.tab.id]){
                    data.request(request.params, function(data){
                        formIdCache[sender.tab.id] = request.params.formId;
                        onData(data);
                    });
                }else{
                    data.get(onData);
                }
                break;
            case "get-data":
                data.get(onData);
                break;
            case "bind-appid":
                data.bindAppId(request.appId);
                sendResponse();
                break;
            case "complete":
                data.submit(request.acceptNum, function(){
                    sendResponse({
                        ok: true
                    });
                });
                break;
        }
    }
});