require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlSpouseAddress'
]);

require("lib/background").ready(function(info){
	var SpouseEntity = Entity({
		"SpouseSurname": {},
		"SpouseGivenName": {},
		"SpouseBirth": {
			"type": Type.DateEn
		},
		"SpouseNationality": {
			"type": Type.Enum
		},
		"SpouseCity": {},
		"SpouseCityUnknow": {
			"type": Type.Bool
		},
		"SpouseCountry": {
			"type": Type.Enum
		},
		"SpouseAddressType": {
			"type": Type.Enum,
			"event-target": {
				"O": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpouseAddressType"
			},
			"subs": {
				"O": {
					"SpouseAddressLine1": {},
					"SpouseAddressLine2": {},
					"SpouseAddressCity": {},
					"SpouseAddressState": {},
					"SpouseAddressStateNA": {
						"type": Type.Bool
					},
					"SpouseAddressZipCode": {},
					"SpouseAddressZipCodeNA": {
						"type": Type.Bool
					},
					"SpouseAddressCountry": {
						"type": Type.Enum
					}
				}
			}
		}
	}, {
		"SpouseSurname": "ctl00$SiteContentPlaceHolder$FormView1$tbxSpouseSurname",
		"SpouseGivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxSpouseGivenName",
		"SpouseBirth": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxDOBYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBDay"
		},
		"SpouseNationality": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpouseNatDropDownList",
		"SpouseCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxSpousePOBCity",
		"SpouseCityUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxSPOUSE_POB_CITY_NA",
		"SpouseCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpousePOBCountry",
		"SpouseAddressType": "ctl00$SiteContentPlaceHolder$FormView1$ddlSpouseAddressType",
		"SpouseAddressLine1": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_LN1",
		"SpouseAddressLine2": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_LN2",
		"SpouseAddressCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_CITY",
		"SpouseAddressState": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_STATE",
		"SpouseAddressStateNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxSPOUSE_ADDR_STATE_NA",
		"SpouseAddressZipCode": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPOUSE_ADDR_POSTAL_CD",
		"SpouseAddressZipCodeNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxSPOUSE_ADDR_POSTAL_CD_NA",
		"SpouseAddressCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlSPOUSE_ADDR_CNTRY"
	});

	var data = SpouseEntity(info.data.Spouse);
	form.set(data, function(){
		// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});