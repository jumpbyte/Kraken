// @entry
var Page = require("lib/page");

Page("SecureQuestion", function(data){
	$("#ctl00_SiteContentPlaceHolder_ddlQuestions").val(data.Questions);
	$("#ctl00_SiteContentPlaceHolder_txtAnswer").val(data.Answer);
	require("lib/background").bindAppId($("#ctl00_SiteContentPlaceHolder_lblBarcode").text(), function(){
		$("#ctl00_SiteContentPlaceHolder_btnContinue").click();
	});
});