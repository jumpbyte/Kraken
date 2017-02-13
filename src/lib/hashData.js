module.exports = function(data, hash){
	var _data = {};
	
	Object.keys(hash).forEach(function(key){
		if(data[key]){
			_data[hash[key]] = data[key];
		}
	});

	return _data;
};