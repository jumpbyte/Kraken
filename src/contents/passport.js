require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel2',
	'tctl00$SiteContentPlaceHolder$FormView1$ctl02',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel1'
]);

require("lib/background").ready(function(info){
	var PassportEntity = Entity({
		"PassportType": {
			"type": Type.Enum,
			"default": "R"
		},
		"PassportNumber": {},
		"PassportBookNumber": {},
		"PassportBookNumberNA": {
			"type": Type.Bool
		},
		"IssuedCountry": {
			"type": Type.Enum
		},
		"IssuedInCity": {},
		"IssuedInState": {},
		"IssuedInCountry": {
			"type": Type.Enum
		},
		"IssuedDate": {
			"type": Type.Date
		},
		"ExpireDate": {
			"type": Type.Date
		},
		"ExpireNA": {
			"type": Type.Bool
		},
		"HasLostPassport": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblLOST_PPT_IND$0",
			"subs": {
				"Y": {
					"LostPassports": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl00$InsertButtonLostPPT",
						"item": {
							"Number": {},
							"NumberUnknow": {
								"type": Type.Bool
							},
							"Country": {
								"type": Type.Enum
							},
							"Explain": {}
						}
					}
				}
			}
		}
	}, {
		"PassportType": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_TYPE",
		"PassportNumber": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_NUM",
		"PassportBookNumber": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_BOOK_NUM",
		"PassportBookNumberNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxPPT_BOOK_NUM_NA",
		"IssuedCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_CNTRY",
		"IssuedInCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_ISSUED_IN_CITY",
		"IssuedInState": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_ISSUED_IN_STATE",
		"IssuedInCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_IN_CNTRY",
		"IssuedDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_ISSUEDYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_DTEMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_ISSUED_DTEDay",
		},
		"ExpireDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxPPT_EXPIREYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_EXPIRE_DTEMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlPPT_EXPIRE_DTEDay",
		},
		"ExpireNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxPPT_EXPIRE_NA",
		"HasLostPassport": "ctl00$SiteContentPlaceHolder$FormView1$rblLOST_PPT_IND",
		"LostPassports.Number": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl0{0}$tbxLOST_PPT_NUM",
		"LostPassports.NumberUnknow": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl0{0}$cbxLOST_PPT_NUM_UNKN_IND",
		"LostPassports.Country": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl0{0}$ddlLOST_PPT_NATL",
		"LostPassports.Explain": "ctl00$SiteContentPlaceHolder$FormView1$dtlLostPPT$ctl0{0}$tbxLOST_PPT_EXPL"
	});

	var data = PassportEntity(info.data.Passport);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});