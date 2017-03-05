// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("Travel", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlPrincipalApplicant',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlSpecificTravel',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlNotKnow',
		'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel1',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlPayer'
	],
	entity: {
		// 赴美访问的目的
		"PurposeOfTrips": {
			"type": Type.Array,
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dlPrincipalAppTravel$ctl00$InsertButtonAlias",
			"item": {
				// 赴美访问的目的
				"PurposeOfTrip": {
					"default": "B",
					"type": Type.Enum,
					"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dlPrincipalAppTravel$ctl0{0}$ddlPurposeOfTrip",
					"subs": {
						"B": {
							// 具体说明
							"Specify": {
								"default": "B1-B2",
								"type": Type.Enum
							}
						}
					}
				}
			}
		},
		// 您是否制定了具体的行程计划？
		"SpecificTravel": {
			"type": Type.YN,
			"optional": "N",
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblSpecificTravel$0",
				"N": "ctl00$SiteContentPlaceHolder$FormView1$rblSpecificTravel$1"
			},
			"subs": {
				"Y": {
					// 抵达美国日期
					"ArriveDate": {
						"type": Type.DateS
					},
					// 抵达的航班
					"ArriveFlight": {},
					// 抵达的城市
					"ArriveCity": {},
					// 离开美国的日期
					"DepartDate": {
						"type": Type.DateS
					},
					// 离开的航班
					"DepartFlight": {},
					// 离开的城市
					"DepartCity": {},
					// 在美期间计划访问的地点
					"SpectravelLocations": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlTravelLoc$ctl00$InsertButtonTravelLoc",
						"item": {
							"SpectravelLocation": {}
						}
					},
					// 在美国的地址
					"StayStreetAddress1": {},
					// 在美国的地址
					"StayStreetAddress2": {},
					// 城市
					"StayCity": {},
					// 州
					"StayState": {},
					// 邮编
					"StayZIPCode": {}
				},
				"N": {
					// 预计抵达美国的日期
					"IntendedDate": {
						"type": Type.DateS
					},
					// 预计停留时长
					"TravelLengthOfStay": {},
					// 预计停留时长单位
					"TravelLengthOfStayCD": {
						// 年、月、周、日["Y", "M", "W", "D"]
						"type": Type.Enum,
						"default": "D",
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$ddlTRAVEL_LOS_CD",
						"subs": {
							"__ALL__": {
								// 在美国的地址
								"StayStreetAddress1": {},
								// 在美国的地址
								"StayStreetAddress2": {},
								// 城市
								"StayCity": {},
								// 州
								"StayState": {},
								// 邮编
								"StayZIPCode": {}
							}
						}
					}
				}
			}
		},
		// 谁为您支付本次出行费用？
		"WhoIsPaying": {
			"type": Type.Enum,
			"default": "S",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$ddlWhoIsPaying",
			"subs": {
				// 其他人
				"O": {
					// 付费人姓
					"PayerSurname": {},
					// 付费人名
					"PayerGivenName": {},
					// 付费人电话
					"PayerPhone": {},
					// 付费人邮箱
					"PayerEmail": {},
					// 邮箱是否不提供
					"PayerEmailNA": {
						"type": Type.Bool
					},
					// 与你关系
					"PayerRelationship": {
						"type": Type.Enum
					},
					// 付费人的地址与您的通讯地址相同？
					"PayerAddrSameAsInd": {
						"type": Type.YN,
						"default": "Y",
						"event-target": {
							"N": "ctl00$SiteContentPlaceHolder$FormView1$rblPayerAddrSameAsInd$1"
						},
						"subs": {
							"N": {
								// 付费人地址
								"PayerStreetAddress1": {},
								// 付费人地址
								"PayerStreetAddress2": {},
								// 付费人城市
								"PayerCity": {},
								// 付费人省份
								"PayerStateProvince": {},
								// 付费人省份是否不提供
								"PayerStateProvinceNA": {
									"type": Type.Bool
								},
								// 付费人邮编
								"PayerPostalZIPCode": {},
								// 付费人邮编是否不提供
								"PayerPostalZIPCodeNA": {
									"type": Type.Bool
								},
								// 付费人国家
								"PayerCountry": {
									"type": Type.Enum
								}
							}
						}
					}
				},
				// 其他公司/组织机构
				"C": {
					// 付费公司名
					"PayingCompany": {},
					// 付费公司电话
					"PayerPhone": {},
					// 付费公司与你关系
					"PayingCompanyRelation": {},
					// 付费公司地址
					"PayerStreetAddress1": {},
					// 付费公司地址
					"PayerStreetAddress2": {},
					// 付费公司城市
					"PayerCity": {},
					// 付费公司省份
					"PayerStateProvince": {},
					// 付费公司省份是否不提供
					"PayerStateProvinceNA": {
						"type": Type.Bool
					},
					// 付费公司邮编
					"PayerPostalZIPCode": {},
					// 付费公司邮编是否不提供
					"PayerPostalZIPCodeNA": {
						"type": Type.Bool
					},
					// 付费公司国家
					"PayerCountry": {
						"type": Type.Enum
					}
				}
			}
		}
	},
	hash: {
		"PurposeOfTrip": "ctl00$SiteContentPlaceHolder$FormView1$dlPrincipalAppTravel$ctl0{0}$ddlPurposeOfTrip",
		"Specify": "ctl00$SiteContentPlaceHolder$FormView1$dlPrincipalAppTravel$ctl0{0}$ddlOtherPurpose",
		"SpecificTravel": "ctl00$SiteContentPlaceHolder$FormView1$rblSpecificTravel",
		"ArriveDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxARRIVAL_US_DTEYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlARRIVAL_US_DTEMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlARRIVAL_US_DTEDay"
		},
		"ArriveFlight": "ctl00$SiteContentPlaceHolder$FormView1$tbxArriveFlight",
		"ArriveCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxArriveCity",
		"DepartDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxDEPARTURE_US_DTEYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlDEPARTURE_US_DTEMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlDEPARTURE_US_DTEDay"
		},
		"DepartFlight": "ctl00$SiteContentPlaceHolder$FormView1$tbxDepartFlight",
		"DepartCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxDepartCity",
		"SpectravelLocation": "ctl00$SiteContentPlaceHolder$FormView1$dtlTravelLoc$ctl0{0}$tbxSPECTRAVEL_LOCATION",
		"StayStreetAddress1": "ctl00$SiteContentPlaceHolder$FormView1$tbxStreetAddress1",
		"StayStreetAddress2": "ctl00$SiteContentPlaceHolder$FormView1$tbxStreetAddress2",
		"StayCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxCity",
		"StayState": "ctl00$SiteContentPlaceHolder$FormView1$ddlTravelState",
		"StayZIPCode": "ctl00$SiteContentPlaceHolder$FormView1$tbZIPCode",
		"IntendedDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxTRAVEL_DTEYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlTRAVEL_DTEMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlTRAVEL_DTEDay"
		},
		"TravelLengthOfStay": "ctl00$SiteContentPlaceHolder$FormView1$tbxTRAVEL_LOS",
		"TravelLengthOfStayCD": "ctl00$SiteContentPlaceHolder$FormView1$ddlTRAVEL_LOS_CD",
		"WhoIsPaying": "ctl00$SiteContentPlaceHolder$FormView1$ddlWhoIsPaying",
		"PayerSurname": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerSurname",
		"PayerGivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerGivenName",
		"PayerPhone": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerPhone",
		"PayerEmail": "ctl00$SiteContentPlaceHolder$FormView1$tbxPAYER_EMAIL_ADDR",
		"PayerEmailNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxDNAPAYER_EMAIL_ADDR_NA",
		"PayerRelationship": "ctl00$SiteContentPlaceHolder$FormView1$ddlPayerRelationship",
		"PayerAddrSameAsInd": "ctl00$SiteContentPlaceHolder$FormView1$rblPayerAddrSameAsInd",
		"PayerStreetAddress1": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerStreetAddress1",
		"PayerStreetAddress2": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerStreetAddress2",
		"PayerCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerCity",
		"PayerStateProvince": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerStateProvince",
		"PayerStateProvinceNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxDNAPayerStateProvince",
		"PayerPostalZIPCode": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayerPostalZIPCode",
		"PayerPostalZIPCodeNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxDNAPayerPostalZIPCode",
		"PayerCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlPayerCountry",
		"PayingCompany": "ctl00$SiteContentPlaceHolder$FormView1$tbxPayingCompany",
		"PayingCompanyRelation": "ctl00$SiteContentPlaceHolder$FormView1$tbxCompanyRelation"
	}
});