define("lib/storage", function(require, exports, module){
module.exports = {
	get: function (key) {
		return localStorage.getItem(key);
	},
	set: function (key, val) {
		localStorage.setItem(key, val);
	},
	remove: function (key) {
		localStorage.removeItem(key);
	}
};
});

if(false){
	require("lib/storage");
}