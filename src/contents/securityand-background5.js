// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("SecurityandBackground5", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlReimburse'
	],
	entity: {
		"ChildCustody": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_childcustody").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"ChildCustodyExplain": {}
				}
			}
		},
		"VotingViolation": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_votingviolation").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"VotingViolationExplain": {}
				}
			}
		},
		"RenounceExp": {
			"type": Type.YN,
			"default": "N",
			"event-target": function(){
				$("#ctl00_SiteContentPlaceHolder_FormView1_renounceexp").css({
					display: ""
				});
			},
			"subs": {
				"Y": {
					"RenounceExpExplain": {}
				}
			}
		},
		"AttWoReimb": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblAttWoReimb$0",
			"subs": {
				"Y": {
					"AttWoReimbExplain": {}
				}
			}
		}
	},
	hash: {
		"ChildCustody": "ctl00$SiteContentPlaceHolder$FormView1$rblChildCustody",
		"ChildCustodyExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxChildCustody",
		"VotingViolation": "ctl00$SiteContentPlaceHolder$FormView1$rblVotingViolation",
		"VotingViolationExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxVotingViolation",
		"RenounceExp": "ctl00$SiteContentPlaceHolder$FormView1$rblRenounceExp",
		"RenounceExpExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxRenounceExp",
		"AttWoReimb": "ctl00$SiteContentPlaceHolder$FormView1$rblAttWoReimb",
		"AttWoReimbExplain": "ctl00$SiteContentPlaceHolder$FormView1$tbxAttWoReimb"
	}
});