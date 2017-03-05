// @raw
var mods = {};

function define(id, factory){
	mods[id] = factory;
};

function require(id){
	var factory = mods[id];

	if(!factory.isInitialized){
		factory.isInitialized = true;
		factory.exports = {};
		factory(require, factory.exports, factory);
	}

	return factory.exports;
};