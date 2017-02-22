require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
]);

require("lib/background").ready(function(info){
	var SecurityandBackgroundEntity = Entity({
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
	}, {
		"Disease": "ctl00$SiteContentPlaceHolder$FormView1$rblDisease",
		"DiseaseExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxDisease",
		"Disorder": "ctl00$SiteContentPlaceHolder$FormView1$rblDisorder",
		"DisorderExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxDisorder",
		"Druguser": "ctl00$SiteContentPlaceHolder$FormView1$rblDruguser",
		"DruguserExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxDruguser"
	});

	var data = SecurityandBackgroundEntity(info.data.SecurityandBackground1);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});