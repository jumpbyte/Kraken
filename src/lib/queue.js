module.exports = function(list, callback){
	var self = function(){
		var task;

		if(task = list.shift()){
			task(self);
		}else{
			callback && callback();
		}
	};

	self();
};