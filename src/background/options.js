var storage = require("lib/storage");

// 开关
var Options = {};
var AUTO_NEXT_STORAGE_KEY = "auto-next";
var REQUEST_URL_STORAGE_KEY = "request-url";
var SUBMIT_URL_STORAGE_KEY = "submit-url";
var MD5_KEY_STORAGE_KEY = "md5-key";

Object.defineProperty(Options, "autoNext", {
    get: function(){
        return storage.get(AUTO_NEXT_STORAGE_KEY) !== "N";
    },
    set: function(value){
        if(value){
            storage.remove(AUTO_NEXT_STORAGE_KEY);
        }else{
            storage.set(AUTO_NEXT_STORAGE_KEY, "N");
        }
    }
});

Object.defineProperty(Options, "requestUrl", {
    get: function(){
        return storage.get(REQUEST_URL_STORAGE_KEY) || "";
    },
    set: function(value){
        storage.set(REQUEST_URL_STORAGE_KEY, value);
    }
});

Object.defineProperty(Options, "submitUrl", {
    get: function(){
        return storage.get(SUBMIT_URL_STORAGE_KEY) || "";
    },
    set: function(value){
        storage.set(SUBMIT_URL_STORAGE_KEY, value);
    }
});

Object.defineProperty(Options, "md5Key", {
    get: function(){
        return storage.get(MD5_KEY_STORAGE_KEY) || "";
    },
    set: function(value){
        storage.set(MD5_KEY_STORAGE_KEY, value);
    }
});

module.exports = Options;