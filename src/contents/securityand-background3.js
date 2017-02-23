var Page = require("lib/page");
var Type = require("lib/type");

Page("SecurityandBackground3", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
	],
	entity: {
		"IllegalActivity": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_illegalactivity").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"IllegalActivityExplain": {}
				}
			}
		},
		"TerroristActivity": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_terroristactivity").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"TerroristActivityExplain": {}
				}
			}
		},
		"TerroristSupport": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_terroristsupport").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"TerroristSupportExplain": {}
				}
			}
		},
		"TerroristOrg": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_terroristorg").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"TerroristOrgExplain": {}
				}
			}
		},
		"Genocide": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_genocide").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"GenocideExplain": {}
				}
			}
		},
		"Torture": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_torture").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"TortureExplain": {}
				}
			}
		},
		"ExViolence": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_exviolence").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ExViolenceExplain": {}
				}
			}
		},
		"ChildSoldier": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_childsoldier").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ChildSoldierExplain": {}
				}
			}
		},
		"ReligiousFreedom": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_religiousfreedom").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ReligiousFreedomExplain": {}
				}
			}
		},
		"PopulationControls": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_populationcontrols").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"PopulationControlsExplain": {}
				}
			}
		},
		"Transplant": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_transplant").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"TransplantExplain": {}
				}
			}
		}
	},
	hash: {
		"IllegalActivity": "ctl00$SiteContentPlaceHolder$FormView1$rblIllegalActivity",
		"IllegalActivityExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxIllegalActivity",
		"TerroristActivity": "ctl00$SiteContentPlaceHolder$FormView1$rblTerroristActivity",
		"TerroristActivityExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxTerroristActivity",
		"TerroristSupport": "ctl00$SiteContentPlaceHolder$FormView1$rblTerroristSupport",
		"TerroristSupportExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxTerroristSupport",
		"TerroristOrg": "ctl00$SiteContentPlaceHolder$FormView1$rblTerroristOrg",
		"TerroristOrgExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxTerroristOrg",
		"Genocide": "ctl00$SiteContentPlaceHolder$FormView1$rblGenocide",
		"GenocideExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxGenocide",
		"Torture": "ctl00$SiteContentPlaceHolder$FormView1$rblTorture",
		"TortureExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxTorture",
		"ExViolence": "ctl00$SiteContentPlaceHolder$FormView1$rblExViolence",
		"ExViolenceExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxExViolence",
		"ChildSoldier": "ctl00$SiteContentPlaceHolder$FormView1$rblChildSoldier",
		"ChildSoldierExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxChildSoldier",
		"ReligiousFreedom": "ctl00$SiteContentPlaceHolder$FormView1$rblReligiousFreedom",
		"ReligiousFreedomExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxReligiousFreedom",
		"PopulationControls": "ctl00$SiteContentPlaceHolder$FormView1$rblPopulationControls",
		"PopulationControlsExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxPopulationControls",
		"Transplant": "ctl00$SiteContentPlaceHolder$FormView1$rblTransplant",
		"TransplantExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxTransplant"
	}
});