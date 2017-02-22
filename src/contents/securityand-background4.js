require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlRemoval',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlImmigrationFraud',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlFailToAttend',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlViolateVisa'
]);

require("lib/background").ready(function(info){
	var SecurityandBackgroundEntity = Entity({
		"RemovalHearing": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_removalhearing").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"RemovalHearingExplain": {}
				}
			}
		},
		"ImmigrationFraud": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_immigrationfraud").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ImmigrationFraudExplain": {}
				}
			}
		},
		"FailToAttend": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_failtoattend").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"FailToAttendExplain": {}
				}
			}
		},
		"VisaViolation": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_visaviolation").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"VisaViolationExplain": {}
				}
			}
		}
	}, {
		"RemovalHearing": "ctl00$SiteContentPlaceHolder$FormView1$rblRemovalHearing",
		"RemovalHearingExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxRemovalHearing",
		"ImmigrationFraud": "ctl00$SiteContentPlaceHolder$FormView1$rblImmigrationFraud",
		"ImmigrationFraudExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxImmigrationFraud",
		"FailToAttend": "ctl00$SiteContentPlaceHolder$FormView1$rblFailToAttend",
		"FailToAttendExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxFailToAttend",
		"VisaViolation": "ctl00$SiteContentPlaceHolder$FormView1$rblVisaViolation",
		"VisaViolationExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxVisaViolation"
	});

	var data = SecurityandBackgroundEntity(info.data.SecurityandBackground4);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});