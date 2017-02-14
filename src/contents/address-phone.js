require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");
require("lib/background").ready(function(info){
	var hash = {
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
	};
	var data = hashData(info.data, hash);
	form.set(data);
	// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
});