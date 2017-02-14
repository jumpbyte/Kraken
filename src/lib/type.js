var Type = module.exports = {
	String: function(value){
		return typeof value === "string";
	},
	Bool: function(value){
		return typeof value === "boolean";
	},
	Enum: function(value){
		// if(value instanceof Array){
		// 	return function(_value){
		// 		return value.indexOf(_value) !== -1;
		// 	};
		// }else{
			return typeof value === "string";
		//}
	},
	YN: function(value){
		return ["Y", "N"].indexOf(value) !== -1;
	},
	Array: function(value){
		return value instanceof Array;
	},
	Date: function(value){
		return typeof value.Year !== "undefined" &&
				typeof value.Month !== "undefined" &&
				typeof value.Day !== "undefined";
	},
	DateEn: function(value){
		return typeof value.Year !== "undefined" &&
				typeof value.Month !== "undefined" &&
				typeof value.Day !== "undefined";
	}
};