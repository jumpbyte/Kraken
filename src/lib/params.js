module.exports = (function(items){
	var params = {};
	items.forEach(function(item){
		params[item[0]] = item[1];
	});
	return params;
})(location.hash.replace(/^#/, "").split("&").filter(function(item){
	return !!item;
}).map(function(item){
	return item.split("=");
}));