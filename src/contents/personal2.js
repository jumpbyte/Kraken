require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlNatl',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlAPP_OTH_NATL_IND',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlOTHER_NATL',
	'tctl00$SiteContentPlaceHolder$FormView1$Help',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlPermResOtherCntryInd',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel2',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlOthPermResCntryHelp'
]);

require("lib/background").ready(function(info){
	var PersonalEntity = Entity({
		// 国籍
		"Nationality": {
			"type": Type.Enum
		},
		// 是否拥有其他国籍
		"HasOtherNationality": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblAPP_OTH_NATL_IND$0"
			},
			"subs": {
				"Y": {
					// 其他国籍列表
					"OtherNationalitys": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl00$InsertButtonOTHER_NATL",
						"item": {
							// 国籍
							"Nationality": {
								"type": Type.Enum
							},
							// 是否拥有此国护照
							"HasPassport": {
								"type": Type.YN,
								"default": "N",
								"event-target": {
									"Y": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl0{0}$rblOTHER_PPT_IND$0"
								},
								"subs": {
									"Y": {
										// 护照号
										"PassportNum": {}
									}
								}
							}
						}
					}
				}
			}
		},
		// 是否是其他国家永久居民
		"HasPermResOtherCountry": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblPermResOtherCntryInd$0"
			},
			"subs": {
				"Y": {
					// 国家列表
					"PermResOtherCountrys": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlOthPermResCntry$ctl00$InsertButtonOTHER_PERM_RES",
						"item": {
							// 国家
							"Country": {
								"type": Type.Enum
							}
						}
					}
				}
			}
		},
		// 身份证号
		"NationalId": {},
		//
		"NationalIdNA": {
			"type": Type.Bool
		},
		// 美国社会安全号码
		"SSN1": {},
		"SSN2": {},
		"SSN3": {},
		//
		"SSNNA": {
			"type": Type.Bool
		},
		// 美国纳税人身份号码
		"TaxId": {},
		//
		"TaxIdNA": {
			"type": Type.Bool
		}
	}, {
		"Nationality": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_NATL",
		"HasOtherNationality": "ctl00$SiteContentPlaceHolder$FormView1$rblAPP_OTH_NATL_IND",
		"OtherNationalitys.Nationality": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl0{0}$ddlOTHER_NATL",
		"OtherNationalitys.HasPassport": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl0{0}$rblOTHER_PPT_IND",
		"OtherNationalitys.PassportNum": "ctl00$SiteContentPlaceHolder$FormView1$dtlOTHER_NATL$ctl0{0}$tbxOTHER_PPT_NUM",
		"HasPermResOtherCountry": "ctl00$SiteContentPlaceHolder$FormView1$rblPermResOtherCntryInd",
		"PermResOtherCountrys.Country": "ctl00$SiteContentPlaceHolder$FormView1$dtlOthPermResCntry$ctl0{0}$ddlOthPermResCntry",
		"NationalId": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_NATIONAL_ID",
		"NationalIdNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_NATIONAL_ID_NA",
		"SSN1": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SSN1",
		"SSN2": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SSN2",
		"SSN3": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SSN3",
		"SSNNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_SSN_NA",
		"TaxId": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_TAX_ID",
		"TaxIdNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_TAX_ID_NA"
	});

	var data = PersonalEntity(info.data.Personal2);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});