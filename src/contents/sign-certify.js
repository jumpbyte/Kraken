// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("Sign", function(data){
	if(!$("#ctl00_SiteContentPlaceHolder_FormView3_rblPREP_IND_1").attr("checked")){
		$("#ctl00_SiteContentPlaceHolder_FormView3_rblPREP_IND_1").attr("checked",true);
		$("#__EVENTTARGET").val("ctl00$SiteContentPlaceHolder$FormView3$rblPREP_IND$1");
		$("#aspnetForm").submit();
	}else{
		$("#ctl00_SiteContentPlaceHolder_PPTNumTbx").val(data.PassportNum);
		// $("#ctl00_SiteContentPlaceHolder_CodeTextBox").focus().keypress(function(e){
		// 	if(e.which === 13){
		// 		e.preventDefault();
		// 		$("#__EVENTTARGET").val("ctl00$SiteContentPlaceHolder$btnSignApp");
		// 		$("#aspnetForm").submit();
		// 	}
		// });
	}
});