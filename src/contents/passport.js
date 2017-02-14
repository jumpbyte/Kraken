require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");
require("lib/background").ready(function(info){
	var hash = {
		"PassportType": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_TYPE",
		"PassportNumber": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_NUM",
		"PassportBookNumber": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_BOOK_NUM",
		"PassportBookNumberNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxPPT_BOOK_NUM_NA",
		"IssuedCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_CNTRY",
		"IssuedInCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_ISSUED_IN_CITY",
		"IssuedInState": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_ISSUED_IN_STATE",
		"IssuedInCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_IN_CNTRY",
		"IssuedYear": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_ISSUEDYear",
		"IssuedMonth": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_DTEMonth",
		"IssuedDay": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_DTEDay",
		"ExpireYear": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_EXPIREYear",
		"ExpireMonth": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_EXPIRE_DTEMonth",
		"ExpireDay": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_EXPIRE_DTEDay",
		"ExpireNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxPPT_EXPIRE_NA",
		"LostPassportInd": "ctl00$SiteContentPlaceHolder$FormView1$rblLOST_PPT_IND",
		"LostPassportNumber": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl00$tbxLOST_PPT_NUM",
		"LostPassportNumberUnknowInd": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl00$cbxLOST_PPT_NUM_UNKN_IND",
		"LostPassportCountry": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl00$ddlLOST_PPT_NATL",
		"LostPassportExplain": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl00$tbxLOST_PPT_EXPL"
	};
	var data = hashData(info.data, hash);
	form.set(data);
	// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
});