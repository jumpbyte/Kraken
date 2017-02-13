var storage = require("lib/storage");

// 开关
var Switch = {};
var IS_OPEN_STORAGE_KEY = "kraken-isopen";

Object.defineProperty(Switch, "isOpen", {
    get: function(){
        return !!storage.get(IS_OPEN_STORAGE_KEY);
    },
    set: function(value){
        if(value){
            storage.set(IS_OPEN_STORAGE_KEY, "true");
        }else{
            storage.remove(IS_OPEN_STORAGE_KEY);
        }
    }
});

function renderOpenStatus(isOpen){
    chrome.browserAction.setBadgeText({
        text: isOpen ? "O" : "C"
    });
    chrome.browserAction.setBadgeBackgroundColor({
        color: isOpen ? [0,255,0,255] : [255,0,0,255]
    });
}
chrome.browserAction.onClicked.addListener(function(tab){
    var isOpen = !Switch.isOpen;
    Switch.isOpen = isOpen;
    renderOpenStatus(isOpen);
});
renderOpenStatus(Switch.isOpen);

module.exports = Switch;