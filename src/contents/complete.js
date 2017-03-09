require("lib/jquery");

require("lib/background").submit($("#xxx").val(), function(){
	alert("提交完成！");
});