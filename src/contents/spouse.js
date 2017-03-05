// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("Spouse", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlSpouseAddress'
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
		},
		"AddressType": {
			"type": Type.Enum,
			"event-target": {
				"O": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpouseAddressType"
			},
			"subs": {
				"O": {
					"AddressLine1": {},
					"AddressLine2": {},
					"AddressCity": {},
					"AddressState": {},
					"AddressStateNA": {
						"type": Type.Bool
					},
					"AddressZipCode": {},
					"AddressZipCodeNA": {
						"type": Type.Bool
					},
					"AddressCountry": {
						"type": Type.Enum
					}
				}
			}
		}
	},
	hash: {
		"Surname": "ctl00$SiteContentPlaceHolder$FormView1$tbxSpouseSurname",
		"GivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxSpouseGivenName",
		"Birth": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxDOBYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBDay"
		},
		"Nationality": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpouseNatDropDownList",
		"City": "ctl00$SiteContentPlaceHolder$FormView1$tbxSpousePOBCity",
		"CityUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxSPOUSE_POB_CITY_NA",
		"Country": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpousePOBCountry",
		"AddressType": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpouseAddressType",
		"AddressLine1": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_LN1",
		"AddressLine2": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_LN2",
		"AddressCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_CITY",
		"AddressState": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_STATE",
		"AddressStateNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxSPOUSE_ADDR_STATE_NA",
		"AddressZipCode": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_POSTAL_CD",
		"AddressZipCodeNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxSPOUSE_ADDR_POSTAL_CD_NA",
		"AddressCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlSPOUSE_ADDR_CNTRY"
	}
});