chrome.runtime.onConnect.addListener(function(port) {
    switch(port.name){
        case "content":
            content.onMessage.addListener(function(msg){
                console.log("content msg:" + JSON.stringify(msg));
            });
            break;
    }
});