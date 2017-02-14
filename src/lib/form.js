var Form = module.exports = {
	get: function(){
		return $("form").serialize();
	},
	event: function(data, callback){
		var forms = document.forms["aspnetForm"];
		for(var name in data){
			$(forms[name]).val(data[name]);
		}
		$.post("", this.get(), function(result){
			console.log(result);
		}, "text");
	},
	set: function(data, hash){
		var forms = document.forms["aspnetForm"];

		function setValue(name, value){
			var form = forms[name];
			if(form){
				if(form.type === "checkbox" && !form.length){
					// 勾选
					$(form).prop("checked", !!value);
					return;
				}else if(form.tagName && form.tagName !== "INPUT" || !form.length && (!form.type || ["radio", "checkbox"].indexOf(form.type) === -1)){
					// 单个值
					$(form).val(value);
					return;
				}else{
					$(form).remove();
				}
			}

			$('<input name="' + name + '" value="' + value + '" />').appendTo(forms);
		}

		Object.keys(data).forEach(function(name){
			var value = data[name];
			if(value instanceof Array){
				// 数组处理有点问题
				value.forEach(function(item){
					Form.set(item, hash);
				});
			}else if(typeof value === "object"){
				setValue(hash[name].Year, value.Year);
				setValue(hash[name].Month, value.Month);
				setValue(hash[name].Day, value.Day);
			}else{
				setValue(hash[name], value);
			}
		});
	}
};