module.exports = {
	set: function(items){
		var forms = document.forms["aspnetForm"];

		Object.keys(items).forEach(function(name){
			var form = forms[name];
			var value = items[name];
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
		});
	}
};