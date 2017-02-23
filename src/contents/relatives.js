var Page = require("lib/page");
var Type = require("lib/type");

Page("Relatives", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel1',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlUS_RELATIVES'
	],
	entity: {
		"FathersSurname": {},
		"FathersSurnameUnknow": {
			"type": Type.Bool
		},
		"FathersGivenName": {},
		"FathersGivenNameUnknow": {
			"type": Type.Bool
		},
		"FathersBirth": {
			"type": Type.DateEn
		},
		"FathersBirthUnknow": {
			"type": Type.Bool
		},
		"IsFatherLiveInUS": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblFATHER_LIVE_IN_US_IND$0"
			},
			"subs": {
				"Y": {
					"FathersStatus": {
						"type": Type.Enum
					}
				}
			}
		},
		"MothersSurname": {},
		"MothersSurnameUnknow": {
			"type": Type.Bool
		},
		"MothersGivenName": {},
		"MothersGivenNameUnknow": {
			"type": Type.Bool
		},
		"MothersBirth": {
			"type": Type.DateEn
		},
		"MothersBirthUnknow": {
			"type": Type.Bool
		},
		"IsMotherLiveInUS": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblMOTHER_LIVE_IN_US_IND$0"
			},
			"subs": {
				"Y": {
					"MothersStatus": {
						"type": Type.Enum
					}
				}
			}
		},
		"HasOtherRelatives": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblUS_IMMED_RELATIVE_IND$0"
			},
			"subs": {
				"Y": {
					"OtherRelatives": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dlUSRelatives$ctl00$InsertButtonUSRelative",
						"item": {
							"Surname": {},
							"GivenName": {},
							"Relationship": {
								"type": Type.Enum
							},
							"RelativesStatus": {
								"type": Type.Enum
							}
						}
					}
				}
			}
		}
	},
	hash: {
		"FathersSurname": "ctl00$SiteContentPlaceHolder$FormView1$tbxFATHER_SURNAME",
		"FathersSurnameUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxFATHER_SURNAME_UNK_IND",
		"FathersGivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxFATHER_GIVEN_NAME",
		"FathersGivenNameUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxFATHER_GIVEN_NAME_UNK_IND",
		"FathersBirth": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxFathersDOBYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlFathersDOBMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlFathersDOBDay"
		},
		"FathersBirthUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxFATHER_DOB_UNK_IND",
		"IsFatherLiveInUS": "ctl00$SiteContentPlaceHolder$FormView1$rblFATHER_LIVE_IN_US_IND",
		"FathersStatus": "ctl00$SiteContentPlaceHolder$FormView1$ddlFATHER_US_STATUS",
		"MothersSurname": "ctl00$SiteContentPlaceHolder$FormView1$tbxMOTHER_SURNAME",
		"MothersSurnameUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxMOTHER_SURNAME_UNK_IND",
		"MothersGivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxMOTHER_GIVEN_NAME",
		"MothersGivenNameUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxMOTHER_GIVEN_NAME_UNK_IND",
		"MothersBirth": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxMothersDOBYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlMothersDOBMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlMothersDOBDay"
		},
		"MothersBirthUnknow": "ctl00$SiteContentPlaceHolder$FormView1$cbxMOTHER_DOB_UNK_IND",
		"IsMotherLiveInUS": "ctl00$SiteContentPlaceHolder$FormView1$rblMOTHER_LIVE_IN_US_IND",
		"MothersStatus": "ctl00$SiteContentPlaceHolder$FormView1$ddlMOTHER_US_STATUS",
		"HasOtherRelatives": "ctl00$SiteContentPlaceHolder$FormView1$rblUS_IMMED_RELATIVE_IND",
		"Surname": "ctl00$SiteContentPlaceHolder$FormView1$dlUSRelatives$ctl0{0}$tbxUS_REL_SURNAME",
		"GivenName": "ctl00$SiteContentPlaceHolder$FormView1$dlUSRelatives$ctl0{0}$tbxUS_REL_GIVEN_NAME",
		"Relationship": "ctl00$SiteContentPlaceHolder$FormView1$dlUSRelatives$ctl0{0}$ddlUS_REL_TYPE",
		"RelativesStatus": "ctl00$SiteContentPlaceHolder$FormView1$dlUSRelatives$ctl0{0}$ddlUS_REL_STATUS"
	}
});