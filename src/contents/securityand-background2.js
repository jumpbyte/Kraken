var Page = require("lib/page");
var Type = require("lib/type");

Page("SecurityandBackground2", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
	],
	entity: {
		"Arrested": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_arrested").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ArrestedExplain": {}
				}
			}
		},
		"ControlledSubstances": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_controlledsubstances").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ControlledSubstancesExplain": {}
				}
			}
		},
		"Prostitution": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_prostitution").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ProstitutionExplain": {}
				}
			}
		},
		"MoneyLaundering": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_moneylaundering").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"MoneyLaunderingExplain": {}
				}
			}
		},
		"HumanTrafficking": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_humantrafficking").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"HumanTraffickingExplain": {}
				}
			}
		},
		"AssistedSevereTrafficking": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_assistedseveretrafficking").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"AssistedSevereTraffickingExplain": {}
				}
			}
		},
		"HumanTraffickingRelated": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_humantraffickingrelated").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"HumanTraffickingRelatedExplain": {}
				}
			}
		}
	},
	hash: {
		"Arrested": "ctl00$SiteContentPlaceHolder$FormView1$rblArrested",
		"ArrestedExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxArrested",
		"ControlledSubstances": "ctl00$SiteContentPlaceHolder$FormView1$rblControlledSubstances",
		"ControlledSubstancesExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxControlledSubstances",
		"Prostitution": "ctl00$SiteContentPlaceHolder$FormView1$rblProstitution",
		"ProstitutionExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxProstitution",
		"MoneyLaundering": "ctl00$SiteContentPlaceHolder$FormView1$rblMoneyLaundering",
		"MoneyLaunderingExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxMoneyLaundering",
		"HumanTrafficking": "ctl00$SiteContentPlaceHolder$FormView1$rblHumanTrafficking",
		"HumanTraffickingExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxHumanTrafficking",
		"AssistedSevereTrafficking": "ctl00$SiteContentPlaceHolder$FormView1$rblAssistedSevereTrafficking",
		"AssistedSevereTraffickingExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxAssistedSevereTrafficking",
		"HumanTraffickingRelated": "ctl00$SiteContentPlaceHolder$FormView1$rblHumanTraffickingRelated",
		"HumanTraffickingRelatedExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxHumanTraffickingRelated"
	}
});