define("contents/personal2", function(require, exports, module){
require("lib/jquery");
var form = require("lib/form");
var hashData = require("lib/hashData");
require("lib/background").ready(function(info){
	var hash = {
		"Nationality": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_NATL",
		"OtherNationalityInd": "ctl00$SiteContentPlaceHolder$FormView1$rblAPP_OTH_NATL_IND",
		"OtherNationality": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl00$ddlOTHER_NATL",
		"OtherPassportInd": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl00$rblOTHER_PPT_IND",
		"OtherPassport": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl00$tbxOTHER_PPT_NUM",
		"PermResOtherCountryInd": "ctl00$SiteContentPlaceHolder$FormView1$rblPermResOtherCntryInd",
		"PermResOtherCountry": "ctl00$SiteContentPlaceHolder$FormView1$dtlOthPermResCntry$ctl00$ddlOthPermResCntry",
		"NationalId": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_NATIONAL_ID",
		"NationalIdNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_NATIONAL_ID_NA",
		"Ssn1": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SSN1",
		"Ssn2": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SSN2",
		"Ssn3": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SSN3",
		"SsnNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_SSN_NA",
		"TaxId": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_TAX_ID",
		"TaxIdNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_TAX_ID_NA"
	};
	var data = hashData(info.data, hash);
	form.set(data);
	$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
});
});

if(true){
	require("contents/personal2");
}