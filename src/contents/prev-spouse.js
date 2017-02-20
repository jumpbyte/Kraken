require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel1'
]);

require("lib/background").ready(function(info){
	var PrevSpouseEntity = Entity({
		"NumberOfPrevSpouses": {
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$tbxNumberOfPrevSpouses",
			"sub": {
				"PrevSpouses": {
					"type": Type.Array,
					"event-target": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl00$InsertButtonSpouse",
					"item": {
						"SpouseSurname": {},
						"SpouseGivenName": {},
						"SpouseBirth": {
							"type": Type.DateEn
						},
						"SpouseNationality": {
							"type": Type.Enum
						},
						"SpouseCity": {},
						"SpouseCityUnknow": {
							"type": Type.Bool
						},
						"SpouseCountry": {
							"type": Type.Enum
						},
						"MarriageDate": {
							"type": Type.DateS
						},
						"MarriageEndedDate": {
							"type": Type.DateS
						},
						"MarriageEndedExplain": {},
						"MarriageEndedCountry": {
							"type": Type.Enum
						}
					}
				}
			}
		}
	}, {
		"NumberOfPrevSpouses": "ctl00$SiteContentPlaceHolder$FormView1$tbxNumberOfPrevSpouses",
		"SpouseSurname": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$tbxSURNAME",
		"SpouseGivenName": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$tbxGIVEN_NAME",
		"SpouseBirth": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$tbxDOBYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlDOBMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlDOBDay"
		},
		"SpouseNationality": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlSpouseNatDropDownList",
		"SpouseCity": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$tbxSpousePOBCity",
		"SpouseCityUnknow": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$cbxSPOUSE_POB_CITY_NA",
		"SpouseCountry": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlSpousePOBCountry",
		"MarriageDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$txtDomYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlDomMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlDomDay"
		},
		"MarriageEndedDate": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$txtDomEndYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlDomEndMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlDomEndDay"
		},
		"MarriageEndedExplain": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$tbxHowMarriageEnded",
		"MarriageEndedCountry": "ctl00$SiteContentPlaceHolder$FormView1$DListSpouse$ctl0{0}$ddlMarriageEnded_CNTRY"
	});

	var data = PrevSpouseEntity(info.data.PrevSpouse);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});