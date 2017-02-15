module.exports = function(list){
	var listeners = [];
	var isComplate = false;
	var onComplete = function(){
		isComplate = true;
		listeners.forEach(function(listener){
			listener();
		});
	};

	var count = list.length,
		results = [];
	if(list && count > 0){
		list.forEach(function(item, index) {
			item(function(result) {
				results[index] = result;
				count --;
				if(count === 0){
					onComplete();
				}
			});
		});
	}else{
		onComplete();
	}

	return {
		complete: function(listener){
			if(isComplate){
				listener();
			}else{
				listeners.push(listener);
			}
		}
	};
};