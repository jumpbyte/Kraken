// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("TravelCompanions", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlOtherPersonsTravelingWithYou',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlGroupTravel'
	],
	entity: {
		"HasOtherPersons": {
			"type": Type.YN,
			"default": "N",
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherPersonsTravelingWithYou$0"
			},
			"subs": {
				"Y": {
					"IsGroupTravel": {
						"type": Type.YN,
						"default": "Y",
						"event-target": {
							"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblGroupTravel$0",
							"N": "ctl00$SiteContentPlaceHolder$FormView1$rblGroupTravel$1"
						},
						"subs": {
							"Y": {
								"GroupName": {}
							},
							"N": {
								"Persons": {
									"type": Type.Array,
									"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dlTravelCompanions$ctl00$InsertButtonPrincipalPOT",
									"item": {
										"Surname": {},
										"GivenName": {},
										"Relationship": {
											"type": Type.Enum
										}
									}
								}
							}
						}
					}
				}
			}
		}
	},
	hash: {
		"HasOtherPersons": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherPersonsTravelingWithYou",
		"IsGroupTravel": "ctl00$SiteContentPlaceHolder$FormView1$rblGroupTravel",
		"GroupName": "ctl00$SiteContentPlaceHolder$FormView1$tbxGroupName",
		"Persons.Surname": "ctl00$SiteContentPlaceHolder$FormView1$dlTravelCompanions$ctl0{0}$tbxSurname",
		"Persons.GivenName": "ctl00$SiteContentPlaceHolder$FormView1$dlTravelCompanions$ctl0{0}$tbxGivenName",
		"Persons.Relationship": "ctl00$SiteContentPlaceHolder$FormView1$dlTravelCompanions$ctl0{0}$ddlTCRelationship"
	}
});