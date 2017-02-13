define("contents/complete-personal", function(require, exports, module){
require("lib/jquery");
var form = require("lib/form");
var hashData = require("lib/hashData");
require("lib/background").ready(function(info){
	var hash = {
		"SurName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SURNAME",
		"GivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_GIVEN_NAME",
		"FullNameNative": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_FULL_NAME_NATIVE",
		"FullNameNativeNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_FULL_NAME_NATIVE_NA",
		"OtherNames": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherNames",
		"OtherNamesSurName": "ctl00$SiteContentPlaceHolder$FormView1$DListAlias$ctl00$tbxSURNAME",
		"OtherNamesGivenName": "ctl00$SiteContentPlaceHolder$FormView1$DListAlias$ctl00$tbxGIVEN_NAME",
		"TelecodeQuestion": "ctl00$SiteContentPlaceHolder$FormView1$rblTelecodeQuestion",
		"TelecodeSurName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_TelecodeSURNAME",
		"TelecodeGivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_TelecodeGIVEN_NAME",
		"Gender": "ctl00$SiteContentPlaceHolder$FormView1$rblAPP_GENDER",
		"MaritalStatus": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_MARITAL_STATUS",
		"OtherMaritalStatus": "ctl00$SiteContentPlaceHolder$FormView1$tbxOtherMaritalStatus",
		"BirthYear": "ctl00$SiteContentPlaceHolder$FormView1$tbxDOBYear",
		"BirthMonth": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBMonth",
		"BirthDay": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBDay",
		"City": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_POB_CITY",
		"Province": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_POB_ST_PROVINCE",
		"ProvinceNA": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_POB_ST_PROVINCE_NA",
		"Country": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_POB_CNTRY"
	};
	var data = hashData(info.data, hash);
	form.set(data);
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_SURNAME").val("XIONG");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_GIVEN_NAME").val("XIONG");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_FULL_NAME_NATIVE").val("XIONG XIONG");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_FULL_NAME_NATIVE_NA").val("");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_rblOtherNames_1").prop("checked", true);
	// $("#ctl00_SiteContentPlaceHolder_FormView1_rblTelecodeQuestion_1").prop("checked", true);
	// // $("#ctl00_SiteContentPlaceHolder_FormView1_rblTelecodeQuestion").val("Y");
	// // $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_TelecodeSURNAME").val("8600");
	// // $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_TelecodeGIVEN_NAME").val("6676");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_rblAPP_GENDER_0").prop("checked", true);
	// $("#ctl00_SiteContentPlaceHolder_FormView1_ddlAPP_MARITAL_STATUS").val("S");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_ddlDOBDay").val("09");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_ddlDOBMonth").val("OCT");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxDOBYear").val("1977");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_POB_CITY").val("BEIJING");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_POB_ST_PROVINCE").val("BEIJING");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_tbxAPP_POB_ST_PROVINCE_NA").val("");
	// $("#ctl00_SiteContentPlaceHolder_FormView1_ddlAPP_POB_CNTRY").val("CHIN");
	// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
});
});

if(true){
	require("contents/complete-personal");
}