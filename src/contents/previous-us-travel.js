require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlPreviousUSTravel',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlPREV_VISA',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlPREV_VISA_REFUSED',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlIV_PETITION'
]);

require("lib/background").ready(function(info){
	var PreviousUSTravelEntity = Entity({
		"HasPrevUSTravel": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_US_TRAVEL_IND$0"
			},
			"subs": {
				"Y": {
					"Travels": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlPREV_US_VISIT$ctl00$InsertButtonPREV_US_VISIT",
						"item": {
							"ArrivedDate": {
								"type": Type.DateS
							},
							"StayLength": {},
							"StayLengthCD": {
								"type": Type.Enum,
								"default": "D"
							}
						}
					},
					"HasUSDriverLicense": {
						"type": Type.YN,
						"default": "N",
						"event-target": {
							"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_US_DRIVER_LIC_IND$0"
						},
						"subs": {
							"Y": {
								"DriverLicenses": {
									"type": Type.Array,
									"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlUS_DRIVER_LICENSE$ctl00$InsertButtonUS_DRIVER_LICENSE",
									"item": {
										"LicenseNum": {},
										"LicenseNumUnknow": {
											"type": Type.Bool
										},
										"LicenseState": {
											"type": Type.Enum
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"HasPrevVisa": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_IND$0"
			},
			"subs": {
				"Y": {
					"PrevVisaIssuedDate": {
						"type": Type.DateS
					},
					"VisaNum": {},
					"VisaNumNA": {
						"type": Type.Bool
					},
					"IsPrevVisaSameType": {
						"type": Type.YN
					},
					"IsPrevVisaSameCountry": {
						"type": Type.YN
					},
					"IsPrevVisaTenPrint": {
						"type": Type.YN
					},
					"IsPrevVisaLost": {
						"type": Type.YN,
						"default": "N",
						"event-target": {
							"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_LOST_IND$0"
						},
						"subs": {
							"Y": {
								"PrevVisaLostYear": {},
								"PrevVisaLostExplain": {}
							}
						}
					},
					"IsPrevVisaCancelled": {
						"type": Type.YN,
						"default": "N",
						"event-target": {
							"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_CANCELLED_IND$0"
						},
						"subs": {
							"Y": {
								"PrevVisaCancelExplain": {}
							}
						}
					}
				}
			}
		},
		"IsPrevVisaRefused": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_REFUSED_IND$0"
			},
			"subs": {
				"Y": {
					"PrevVisaRefusedExplain": {}
				}
			}
		},
		"IsIVPetition": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblIV_PETITION_IND$0"
			},
			"subs": {
				"Y": {
					"IVPetitionExplain": {}
				}
			}
		}
	}, {
		"HasPrevUSTravel": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_US_TRAVEL_IND",
		"ArrivedDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPREV_US_VISIT$ctl0{0}$tbxPREV_US_VISIT_DTEYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPREV_US_VISIT$ctl0{0}$ddlPREV_US_VISIT_DTEMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPREV_US_VISIT$ctl0{0}$ddlPREV_US_VISIT_DTEDay"
		},
		"StayLength": "ctl00$SiteContentPlaceHolder$FormView1$dtlPREV_US_VISIT$ctl0{0}$tbxPREV_US_VISIT_LOS",
		"StayLengthCD": "ctl00$SiteContentPlaceHolder$FormView1$dtlPREV_US_VISIT$ctl0{0}$ddlPREV_US_VISIT_LOS_CD",
		"HasUSDriverLicense": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_US_DRIVER_LIC_IND",
		"LicenseNum": "ctl00$SiteContentPlaceHolder$FormView1$dtlUS_DRIVER_LICENSE$ctl0{0}$tbxUS_DRIVER_LICENSE",
		"LicenseNumUnknow": "ctl00$SiteContentPlaceHolder$FormView1$dtlUS_DRIVER_LICENSE$ctl0{0}$cbxUS_DRIVER_LICENSE_NA",
		"LicenseState": "ctl00$SiteContentPlaceHolder$FormView1$dtlUS_DRIVER_LICENSE$ctl0{0}$ddlUS_DRIVER_LICENSE_STATE",
		"HasPrevVisa": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_IND",
		"PrevVisaIssuedDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxPREV_VISA_ISSUED_DTEYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlPREV_VISA_ISSUED_DTEMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlPREV_VISA_ISSUED_DTEDay"
		},
		"VisaNum": "ctl00$SiteContentPlaceHolder$FormView1$tbxPREV_VISA_FOIL_NUMBER",
		"VisaNumNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxPREV_VISA_FOIL_NUMBER_NA",
		"IsPrevVisaSameType": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_SAME_TYPE_IND",
		"IsPrevVisaSameCountry": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_SAME_CNTRY_IND",
		"IsPrevVisaTenPrint": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_TEN_PRINT_IND",
		"IsPrevVisaLost": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_LOST_IND",
		"PrevVisaLostYear": "ctl00$SiteContentPlaceHolder$FormView1$tbxPREV_VISA_LOST_YEAR",
		"PrevVisaLostExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxPREV_VISA_LOST_EXPL",
		"IsPrevVisaCancelled": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_CANCELLED_IND",
		"PrevVisaCancelExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxPREV_VISA_CANCELLED_EXPL",
		"IsPrevVisaRefused": "ctl00$SiteContentPlaceHolder$FormView1$rblPREV_VISA_REFUSED_IND",
		"PrevVisaRefusedExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxPREV_VISA_REFUSED_EXPL",
		"IsIVPetition": "ctl00$SiteContentPlaceHolder$FormView1$rblIV_PETITION_IND",
		"IVPetitionExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxIV_PETITION_EXPL"
	});

	var data = PreviousUSTravelEntity(info.data.PreviousUSTravel);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});