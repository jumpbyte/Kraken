// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("DeceasedSpouse", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
	],
	entity: {
		"Surname": {},
		"GivenName": {},
		"Birth": {
			"type": Type.DateEn
		},
		"Nationality": {
			"type": Type.Enum
		},
		"City": {},
		"CityUnknow": {
			"type": Type.Bool
		},
		"Country": {
			"type": Type.Enum
		}
	},
	hash: {
		"Surname": "ctl00$SiteContentPlaceHolder$FormView1$tbxSURNAME",
		"GivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxGIVEN_NAME",
		"Birth": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxDOBYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBDay"
		},
		"Nationality": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpouseNatDropDownList",
		"City": "ctl00$SiteContentPlaceHolder$FormView1$tbxSpousePOBCity",
		"CityUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxSPOUSE_POB_CITY_NA",
		"Country": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpousePOBCountry"
	}
});