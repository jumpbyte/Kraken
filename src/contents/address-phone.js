// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("AddressPhone", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlMAILING_ADDR_SAME_AS_APP_ADDR',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlAPP_EMAIL_ADDR'
	],
	entity: {
		"AddressLine1": {},
		"AddressLine2": {},
		"AddressCity": {},
		"AddressState": {},
		"AddressStateNA": {
			"type": Type.Bool
		},
		"AddressPostalZone": {},
		"AddressPostalZoneNA": {
			"type": Type.Bool
		},
		"AddressCountry": {
			"type": Type.Enum
		},
		"MailingAddressSame": {
			"type": Type.YN,
			"default": "Y",
			"event-target": {
				"N": "ctl00$SiteContentPlaceHolder$FormView1$rblMailingAddrSame$1"
			},
			"subs": {
				"N": {
					"MailingAddressLine1": {},
					"MailingAddressLine2": {},
					"MailingAddressCity": {},
					"MailingAddressState": {},
					"MailingAddressStateNA": {
						"type": Type.Bool
					},
					"MailingAddressPostalZone": {},
					"MailingAddressPostalZoneNA": {
						"type": Type.Bool
					},
					"MailingAddressCountry": {
						"type": Type.Enum
					}
				}
			}
		},
		"PrimaryPhone": {},
		"SecondaryPhone": {},
		"SecondaryPhoneNA": {
			"type": Type.Bool
		},
		"WorkPhone": {},
		"WorkPhoneNA": {
			"type": Type.Bool
		},
		"Email": {}
	},
	hash: {
		"AddressLine1": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_ADDR_LN1",
		"AddressLine2": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_ADDR_LN2",
		"AddressCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_ADDR_CITY",
		"AddressState": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_ADDR_STATE",
		"AddressStateNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_ADDR_STATE_NA",
		"AddressPostalZone": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_ADDR_POSTAL_CD",
		"AddressPostalZoneNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_ADDR_POSTAL_CD_NA",
		"AddressCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlCountry",
		"MailingAddressSame": "ctl00$SiteContentPlaceHolder$FormView1$rblMailingAddrSame",
		"MailingAddressLine1": "ctl00$SiteContentPlaceHolder$FormView1$tbxMAILING_ADDR_LN1",
		"MailingAddressLine2": "ctl00$SiteContentPlaceHolder$FormView1$tbxMAILING_ADDR_LN2",
		"MailingAddressCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxMAILING_ADDR_CITY",
		"MailingAddressState": "ctl00$SiteContentPlaceHolder$FormView1$tbxMAILING_ADDR_STATE",
		"MailingAddressStateNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxMAILING_ADDR_STATE_NA",
		"MailingAddressPostalZone": "ctl00$SiteContentPlaceHolder$FormView1$tbxMAILING_ADDR_POSTAL_CD",
		"MailingAddressPostalZoneNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxMAILING_ADDR_POSTAL_CD_NA",
		"MailingAddressCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlMailCountry",
		"PrimaryPhone": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_HOME_TEL",
		"SecondaryPhone": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_MOBILE_TEL",
		"SecondaryPhoneNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_MOBILE_TEL_NA",
		"WorkPhone": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_BUS_TEL",
		"WorkPhoneNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_BUS_TEL_NA",
		"Email": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_EMAIL_ADDR"
	}
});