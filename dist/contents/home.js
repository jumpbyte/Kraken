define("contents/home", function(require, exports, module){
require("lib/jquery");
require("lib/background").ready(function(info){
	// 默认城市北京
	var defaultCity = info.data.Location;
	if($("#ctl00_SiteContentPlaceHolder_ucLocation_ddlLocation").val() !== defaultCity){
		$("#ctl00_SiteContentPlaceHolder_ucLocation_ddlLocation").val(defaultCity);
		$("#ctl00_ddlLanguage").val("zh-CN");
		$("#__EVENTTARGET").val("ctl00$SiteContentPlaceHolder$ucLocation$ddlLocation");
		$("#aspnetForm").submit();
	}else{
		var target = $("#get-started");
		target.css({
			position:"absolute",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		});
		target.children(":not(.location,.category)").hide();

		do{
			target.parent().children().not(target).hide();
			target = target.parent();
		}while(!target.is(document.body));
		$("#ctl00_SiteContentPlaceHolder_ucLocation_IdentifyCaptcha1_txtCodeTextBox").css({
			width: "230px",
			height: "40px",
			padding: "0 10px",
			lineHeight: "40px",
			fontSize: "18px"
		}).focus();
	}
});
});

if(true){
	require("contents/home");
}