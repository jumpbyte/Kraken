var Type = require("./type");
var Entity = module.exports = function(entity, hash, parentsKey){
	parentsKey = parentsKey ? parentsKey.replace(/\.+$/, "") + "." : "";

	return function(_data){
		var data = {};

		Object.keys(entity).forEach(function(key){
			var item = entity[key];
			var value = _data[key];

			switch(item.type || Type.String){
				case Type.Array:
					(function(){
						var _value;
						if(value){
							if(value instanceof Array){
								_value = value.map(function(v){
									return Entity(item.item, hash, parentsKey + key)(v);
								});
							}else{
								_value = [Entity(item.item, hash, parentsKey + key)(value)];
							}
						}else{
							_value = [Entity(item.item, hash, parentsKey + key)({})];
						}

						data[key] = {
							type: Type.Array,
							value: _value,
							"event-target": item["event-target"]
						};
					})();
					break;
				case Type.Enum:
				case Type.YN:
					(function(){
						var _value = value || item["default"];
						var hasEvent = item.subs && (item.subs["__ALL__"] || item.subs[_value] && Object.keys(item.subs[_value]).length > 0);
						data[key] = {
							type: Type.Enum,
							name: hash[parentsKey + key] || hash[key],
							value: _value,
							"event-target": hasEvent ? item["event-target"] : "",
							subs: item.subs && (item.subs[_value] || item.subs["__ALL__"]) ? Entity(item.subs[_value] || item.subs["__ALL__"], hash, parentsKey)(_data) : null
						};
						if(!data[key].name){
							console.error("字段'" + (parentsKey + key) + "'没有找到表单名");
						}
					})();
					break;
				case Type.Date:
					data[key] = {
						type: Type.Date,
						name: hash[parentsKey + key] || hash[key],
						value: (function(date){
							date = date.split("-");
							return {
								"Year": date[0],
								"Month": (function(value){
									return value.length === 1 ? "0" + value : value;
								})(date[1]),
								"Day": (function(value){
									return value.length === 1 ? "0" + value : value;
								})(date[2])
							};
						})(value || item["default"])
					};
					if(!data[key].name){
						console.error("字段'" + (parentsKey + key) + "'没有找到表单名");
					}
					break;
				case Type.DateS:
					data[key] = {
						type: Type.DateS,
						name: hash[parentsKey + key] || hash[key],
						value: (function(date){
							date = date.split("-");
							return {
								"Year": date[0],
								"Month": +date[1] + "",
								"Day": +date[2] + ""
							};
						})(value || item["default"])
					};
					if(!data[key].name){
						console.error("字段'" + (parentsKey + key) + "'没有找到表单名");
					}
					break;
				case Type.DateEn:
					data[key] = {
						type: Type.DateEn,
						name: hash[parentsKey + key] || hash[key],
						value: (function(date){
							date = date.split("-");
							return {
								"Year": date[0],
								"Month": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][+date[1] - 1],
								"Day": (function(value){
									return value.length === 1 ? "0" + value : value;
								})(date[2])
							};
						})(value || item["default"])
					};
					if(!data[key].name){
						console.error("字段'" + (parentsKey + key) + "'没有找到表单名");
					}
					break;
				case Type.String:
					(function(){
						data[key] = {
							type: Type.String,
							name: hash[parentsKey + key] || hash[key],
							value: (value || item["default"]) + "",
							"event-target": item["event-target"],
							sub: item["event-target"] && item.sub ? Entity(item.sub, hash, parentsKey)(_data) : null
						};
						if(!data[key].name){
							console.error("字段'" + (parentsKey + key) + "'没有找到表单名");
						}
					})();
					break;
				case Type.Bool:
					data[key] = {
						type: Type.Bool,
						name: hash[parentsKey + key] || hash[key],
						value: typeof value === "boolean" ? value : item["default"]
					};
					if(!data[key].name){
						console.error("字段'" + (parentsKey + key) + "'没有找到表单名");
					}
					break;
			}
		});

		return data;
	};
};