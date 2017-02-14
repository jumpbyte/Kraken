var Type = require("./type");
var Entity = module.exports = function(entity){
	return function(_data){
		var data = {};

		Object.keys(entity).forEach(function(key){
			var item = entity[key];
			var value = _data[key];

			switch(item.type || Type.String){
				case Type.Array:
					if(value){
						if(value instanceof Array){
							data[key] = value.map(function(v){
								return Entity(item.item)(v);
							});
						}else{
							data[key] = [Entity(item.item)(value)];
						}
					}else{
						data[key] = [Entity(item.item)({})];
					}
					break;
				case Type.Enum:
				case Type.YN:
					data[key] = value || item["default"];
					if(item.subs && item.subs[data[key]]){
						data = Object.assign(data, Entity(item.subs[data[key]])(_data))
					}
					break;
				case Type.Date:
					data[key] = (function(date){
						date = date.split("-");
						return {
							"Year": date[2],
							"Month": date[1],
							"Day": date[0]
						};
					})(value || item["default"]);
					break;
				case Type.DateEn:
					data[key] = (function(date){
						date = date.split("-");
						return {
							"Year": date[2],
							"Month": date[1],
							"Day": date[0]
						};
					})(value || item["default"]);
					break;
				case Type.String:
					data[key] = (value || item["default"]) + "";
					break;
				case Type.Bool:
					data[key] = typeof value === "boolean" ? value : item["default"];
					break;
			}
		});

		return data;
	};
};