require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlPrevEmpl',
	'tctl00$SiteContentPlaceHolder$FormView1$upnlOtherEduc'
]);

require("lib/background").ready(function(info){
	var WorkEducationEntity = Entity({
		"PreviouslyEmployed": {
			"type": Type.YN,
			"default": "N",
			"event-type": "ctl00$SiteContentPlaceHolder$FormView1$rblPreviouslyEmployed$0",
			"subs": {
				"Y": {
					"": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$InsertButtonPrevEmpl",
						"item": {
							
						}
					}
				}
			}
		},
		"OtherEduc": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherEduc$0",
			"subs": {
				"Y": {
					"": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$InsertButtonPrevEduc",
						"item": {

						}
					}
				}
			}
		}
	}, {
		"PreviouslyEmployed": "ctl00$SiteContentPlaceHolder$FormView1$rblPreviouslyEmployed",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbEmployerName",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbEmployerStreetAddress1",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbEmployerStreetAddress2",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbEmployerCity",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbxPREV_EMPL_ADDR_STATE",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$cbxPREV_EMPL_ADDR_STATE_NA",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbxPREV_EMPL_ADDR_POSTAL_CD",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$cbxPREV_EMPL_ADDR_POSTAL_CD_NA",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$DropDownList2",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbEmployerPhone",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbJobTitle",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbSupervisorSurname",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$cbxSupervisorSurname_NA",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbSupervisorGivenName",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$cbxSupervisorGivenName_NA",
		"": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbxEmpDateFromYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$ddlEmpDateFromMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$ddlEmpDateFromDay"
		},
		"": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbxEmpDateToYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$ddlEmpDateToMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$ddlEmpDateToDay"
		},
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$tbDescribeDuties",
		"OtherEduc": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherEduc",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxSchoolName",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxSchoolAddr1",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxSchoolAddr2",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxSchoolCity",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxEDUC_INST_ADDR_STATE",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$cbxEDUC_INST_ADDR_STATE_NA",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxEDUC_INST_POSTAL_CD",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$cbxEDUC_INST_POSTAL_CD_NA",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$ddlSchoolCountry",
		"": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxSchoolCourseOfStudy",
		"": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxSchoolFromYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$ddlSchoolFromMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$ddlSchoolFromDay"
		},
		"": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$tbxSchoolToYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$ddlSchoolToMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$ddlSchoolToDay"
		}
	});

	var data = WorkEducationEntity(info.data.WorkEducation);
	form.set(data, function(){
		// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});