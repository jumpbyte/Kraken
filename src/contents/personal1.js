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
	$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
});