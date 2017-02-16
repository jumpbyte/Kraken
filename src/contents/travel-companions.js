require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlOtherPersonsTravelingWithYou',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlGroupTravel'
]);

require("lib/background").ready(function(info){
	var TravelCompanionsEntity = Entity({
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
	}, {
		"HasOtherPersons": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherPersonsTravelingWithYou",
		"IsGroupTravel": "ctl00$SiteContentPlaceHolder$FormView1$rblGroupTravel",
		"GroupName": "ctl00$SiteContentPlaceHolder$FormView1$tbxGroupName",
		"Persons.Surname": "ctl00$SiteContentPlaceHolder$FormView1$dlTravelCompanions$ctl0{0}$tbxSurname",
		"Persons.GivenName": "ctl00$SiteContentPlaceHolder$FormView1$dlTravelCompanions$ctl0{0}$tbxGivenName",
		"Persons.Relationship": "ctl00$SiteContentPlaceHolder$FormView1$dlTravelCompanions$ctl0{0}$ddlTCRelationship"
	});

	var data = TravelCompanionsEntity(info.data.TravelCompanions);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});