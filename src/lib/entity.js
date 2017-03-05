var Type = require("./type");

function doubleNum(value){
	return value.length === 1 ? "0" + value : value;
}

var Entity = module.exports = function(entity, hash, parentsKey){
	parentsKey = parentsKey ? parentsKey.replace(/\.+$/, "") + "." : "";

	return function(_data){
		var data = {};

		Object.keys(entity).forEach(function(key){
			var item = entity[key];
			var value = _data[key];

			item.type = item.type || Type.String;

			switch(item.type){
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
							value: _value,
							"event-target": item["event-target"]
						};
					})();
					break;
				case Type.Enum:
				case Type.YN:
					(function(){
						if(item.type === Type.YN){
							value = value ? "Y" : "N";
						}

						var _value = value || item["default"];
						var hasEvent = item.subs && (item.subs["__ALL__"] || item.subs["__OTHER__"] && !item.subs[_value] || item.subs[_value] && Object.keys(item.subs[_value]).length > 0);
						data[key] = {
							optional: item.optional,
							value: _value,
							"event-target": hasEvent ? item["event-target"] : "",
							subs: item.subs && (item.subs[_value] || item.subs["__ALL__"] || item.subs["__OTHER__"]) ? Entity(item.subs[_value] || item.subs["__ALL__"] || item.subs["__OTHER__"], hash, parentsKey)(_data) : null
						};
					})();
					break;
				case Type.Date:
					data[key] = {
						value: (function(date){
							date = date.split("-");
							return {
								"Year": date[0],
								"Month": doubleNum(date[1]),
								"Day": doubleNum(date[2])
							};
						})(value || item["default"])
					};
					break;
				case Type.DateS:
					data[key] = {
						value: (function(date){
							date = date.split("-");
							return {
								"Year": date[0],
								"Month": +date[1] + "",
								"Day": +date[2] + ""
							};
						})(value || item["default"])
					};
					break;
				case Type.DateEn:
					data[key] = {
						value: (function(date){
							date = date.split("-");
							return {
								"Year": date[0],
								"Month": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][+date[1] - 1],
								"Day": doubleNum(date[2])
							};
						})(value || item["default"])
					};
					break;
				case Type.String:
					data[key] = {
						value: (typeof value === "undefined" ? (item["default"] || "") : value) + "",
						"event-target": item["event-target"],
						sub: item["event-target"] && item.sub ? Entity(item.sub, hash, parentsKey)(_data) : null
					};
					break;
				case Type.Bool:
					data[key] = {
						value: typeof value === "boolean" ? value : item["default"]
					};
					break;
			}

			data[key].type = item.type;

			if(item.type !== Type.Array){
				if(!(data[key].name = hash[parentsKey + key] || hash[key])){
					console.error("字段'" + (parentsKey + key) + "'没有找到表单名");
				}
			}
		});

		return data;
	};
};