// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("SecurityandBackground1", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
	],
	entity: {
		"Disease": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_disease").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"DiseaseExplain": {}
				}
			}
		},
		"Disorder": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_disorder").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"DisorderExplain": {}
				}
			}
		},
		"Druguser": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_druguser").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"DruguserExplain": {}
				}
			}
		}
	},
	hash: {
		"Disease": "ctl00$SiteContentPlaceHolder$FormView1$rblDisease",
		"DiseaseExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxDisease",
		"Disorder": "ctl00$SiteContentPlaceHolder$FormView1$rblDisorder",
		"DisorderExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxDisorder",
		"Druguser": "ctl00$SiteContentPlaceHolder$FormView1$rblDruguser",
		"DruguserExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxDruguser"
	}
});