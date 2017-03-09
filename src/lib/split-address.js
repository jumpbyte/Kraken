function splitItem(items){
	var item = "";

	while(items.length && (item.length + items[0].length) < 40){
		item += (item ? " " : "") + items.shift();
	}

	if(item.length === 0){
		item = items[0].substring(0, 40);
		items[0] = items[0].substring(40);
	}

	return item;
}

module.exports = function(street, obj, properties){
	if(street.length <= 40){
		obj[properties[0]] = street;
	}else{
		street = street.split(/\s+/);

		obj[properties[0]] = splitItem(street);
		obj[properties[1]] = splitItem(street);
	}
};