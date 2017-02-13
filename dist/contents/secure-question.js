define("contents/secure-question", function(require, exports, module){
require("lib/jquery");
require("lib/background").ready(function(info){
	$("#ctl00_SiteContentPlaceHolder_ddlQuestions").val(info.data.Questions);
	$("#ctl00_SiteContentPlaceHolder_txtAnswer").val(info.data.Answer);
	$("#ctl00_SiteContentPlaceHolder_btnContinue").click();
});
});

if(true){
	require("contents/secure-question");
}