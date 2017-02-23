var Page = require("lib/page");
var Type = require("lib/type");

Page("WorkEducation3", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlClan',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlLANGUAGES_IND',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlCOUNTRIES_VISITED_IND',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlORGANIZATION',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlMILITARY_SERVICE'
	],
	entity: {
		"IsBelongClan": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblCLAN_TRIBE_IND$0",
			"subs": {
				"Y": {
					"ClanName": {}
				}
			}
		},
		"LanguageNames": {
			"type": Type.Array,
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlLANGUAGES$ctl00$InsertButtonLANGUAGE",
			"item": {
				"LanguageName": {}
			}
		},
		"IsCountrysVisited": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblCOUNTRIES_VISITED_IND$0",
			"subs": {
				"Y": {
					"CountrysVisited": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlCountriesVisited$ctl00$InsertButtonCountriesVisited",
						"item": {
							"Country": {}
						}
					}
				}
			}
		},
		"IsBelongOrganization": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblORGANIZATION_IND$0",
			"subs": {
				"Y": {
					"OrganizationNames": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlORGANIZATIONS$ctl00$InsertButtonORGANIZATION",
						"item": {
							"Name": {}
						}
					}
				}
			}
		},
		"HasSpecializedSkills": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_SPECIALIZED_SKILLS").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"SpecializedSkillExplain": {}
				}
			}
		},
		"IsMilitaryService": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblMILITARY_SERVICE_IND$0",
			"subs": {
				"Y": {
					"Militarys": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl00$InsertButtonMILITARY_SERVICE",
						"item": {
							"Country": {
								"type": Type.Enum
							},
							"Branch": {},
							"Rank": {},
							"Specialty": {},
							"FromDate": {
								"type": Type.DateS
							},
							"ToDate": {
								"type": Type.DateS
							}
						}
					}
				}
			}
		},
		"IsInsurgent": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_INSURGENT_ORG").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"InsurgentExplain": {}
				}
			}
		}
	},
	hash: {
		"IsBelongClan": "ctl00$SiteContentPlaceHolder$FormView1$rblCLAN_TRIBE_IND",
		"ClanName": "ctl00$SiteContentPlaceHolder$FormView1$tbxCLAN_TRIBE_NAME",
		"LanguageName": "ctl00$SiteContentPlaceHolder$FormView1$dtlLANGUAGES$ctl0{0}$tbxLANGUAGE_NAME",
		"IsCountrysVisited": "ctl00$SiteContentPlaceHolder$FormView1$rblCOUNTRIES_VISITED_IND",
		"CountrysVisited.Country": "ctl00$SiteContentPlaceHolder$FormView1$dtlCountriesVisited$ctl0{0}$ddlCOUNTRIES_VISITED",
		"IsBelongOrganization": "ctl00$SiteContentPlaceHolder$FormView1$rblORGANIZATION_IND",
		"OrganizationNames.Name": "ctl00$SiteContentPlaceHolder$FormView1$dtlORGANIZATIONS$ctl0{0}$tbxORGANIZATION_NAME",
		"HasSpecializedSkills": "ctl00$SiteContentPlaceHolder$FormView1$rblSPECIALIZED_SKILLS_IND",
		"SpecializedSkillExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxSPECIALIZED_SKILLS_EXPL",
		"IsMilitaryService": "ctl00$SiteContentPlaceHolder$FormView1$rblMILITARY_SERVICE_IND",
		"Militarys.Country": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$ddlMILITARY_SVC_CNTRY",
		"Militarys.Branch": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$tbxMILITARY_SVC_BRANCH",
		"Militarys.Rank": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$tbxMILITARY_SVC_RANK",
		"Militarys.Specialty": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$tbxMILITARY_SVC_SPECIALTY",
		"Militarys.FromDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$tbxMILITARY_SVC_FROMYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$ddlMILITARY_SVC_FROMMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$ddlMILITARY_SVC_FROMDay"
		},
		"Militarys.ToDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$tbxMILITARY_SVC_TOYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$ddlMILITARY_SVC_TOMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlMILITARY_SERVICE$ctl0{0}$ddlMILITARY_SVC_TODay"
		},
		"IsInsurgent": "ctl00$SiteContentPlaceHolder$FormView1$rblINSURGENT_ORG_IND",
		"InsurgentExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxINSURGENT_ORG_EXPL"
	}
});