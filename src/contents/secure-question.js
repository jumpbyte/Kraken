var Page = require("lib/page");

Page("SecureQuestion", function(data){
	$("#ctl00_SiteContentPlaceHolder_ddlQuestions").val(data.Questions);
	$("#ctl00_SiteContentPlaceHolder_txtAnswer").val(data.Answer);
	$("#ctl00_SiteContentPlaceHolder_btnContinue").click();
});