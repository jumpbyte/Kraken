var Page = require("lib/page");
var Type = require("lib/type");

Page("WorkEducation2", {
	controls: [
		'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlPrevEmpl',
		'tctl00$SiteContentPlaceHolder$FormView1$upnlOtherEduc'
	],
	entity: {
		"PreviouslyEmployed": {
			"type": Type.YN,
			"default": "N",
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblPreviouslyEmployed$0",
			"subs": {
				"Y": {
					"Employers": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl00$InsertButtonPrevEmpl",
						"item": {
							"EmployerName": {},
							"EmployerStreetAddress1": {},
							"EmployerStreetAddress2": {},
							"EmployerCity": {},
							"EmployerState": {},
							"EmployerStateNA": {
								"type": Type.Bool
							},
							"EmployerZipCode": {},
							"EmployerZipCodeNA": {
								"type": Type.Bool
							},
							"EmployerCountry": {
								"type": Type.Enum
							},
							"EmployerPhone": {},
							"JobTitle": {},
							"SupervisorSurname": {},
							"SupervisorSurnameNA": {
								"type": Type.Bool
							},
							"SupervisorGivenName": {},
							"SupervisorGivenNameNA": {
								"type": Type.Bool
							},
							"EmployerDateFrom": {
								"type": Type.DateS
							},
							"EmployerDateTo": {
								"type": Type.DateS
							},
							"DescribeDuties": {}
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
					"Schools": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl00$InsertButtonPrevEduc",
						"item": {
							"SchoolName": {},
							"SchoolAddr1": {},
							"SchoolAddr2": {},
							"SchoolCity": {},
							"SchoolState": {},
							"SchoolStateNA": {
								"type": Type.Bool
							},
							"SchoolZipCode": {},
							"SchoolZipCodeNA": {
								"type": Type.Bool
							},
							"SchoolCountry": {
								"type": Type.Enum
							},
							"SchoolCourseOfStudy": {},
							"SchoolDateFrom": {
								"type": Type.DateS
							},
							"SchoolDateTo": {
								"type": Type.DateS
							}
						}
					}
				}
			}
		}
	},
	hash: {
		"PreviouslyEmployed": "ctl00$SiteContentPlaceHolder$FormView1$rblPreviouslyEmployed",
		"EmployerName": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbEmployerName",
		"EmployerStreetAddress1": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbEmployerStreetAddress1",
		"EmployerStreetAddress2": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbEmployerStreetAddress2",
		"EmployerCity": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbEmployerCity",
		"EmployerState": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbxPREV_EMPL_ADDR_STATE",
		"EmployerStateNA": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$cbxPREV_EMPL_ADDR_STATE_NA",
		"EmployerZipCode": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbxPREV_EMPL_ADDR_POSTAL_CD",
		"EmployerZipCodeNA": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$cbxPREV_EMPL_ADDR_POSTAL_CD_NA",
		"EmployerCountry": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$DropDownList2",
		"EmployerPhone": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbEmployerPhone",
		"JobTitle": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbJobTitle",
		"SupervisorSurname": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbSupervisorSurname",
		"SupervisorSurnameNA": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$cbxSupervisorSurname_NA",
		"SupervisorGivenName": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbSupervisorGivenName",
		"SupervisorGivenNameNA": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$cbxSupervisorGivenName_NA",
		"EmployerDateFrom": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbxEmpDateFromYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$ddlEmpDateFromMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$ddlEmpDateFromDay"
		},
		"EmployerDateTo": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbxEmpDateToYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$ddlEmpDateToMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$ddlEmpDateToDay"
		},
		"DescribeDuties": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEmpl$ctl0{0}$tbDescribeDuties",
		"OtherEduc": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherEduc",
		"SchoolName": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxSchoolName",
		"SchoolAddr1": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxSchoolAddr1",
		"SchoolAddr2": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxSchoolAddr2",
		"SchoolCity": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxSchoolCity",
		"SchoolState": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxEDUC_INST_ADDR_STATE",
		"SchoolStateNA": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$cbxEDUC_INST_ADDR_STATE_NA",
		"SchoolZipCode": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxEDUC_INST_POSTAL_CD",
		"SchoolZipCodeNA": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$cbxEDUC_INST_POSTAL_CD_NA",
		"SchoolCountry": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$ddlSchoolCountry",
		"SchoolCourseOfStudy": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxSchoolCourseOfStudy",
		"SchoolDateFrom": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxSchoolFromYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$ddlSchoolFromMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$ddlSchoolFromDay"
		},
		"SchoolDateTo": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$tbxSchoolToYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$ddlSchoolToMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$dtlPrevEduc$ctl0{0}$ddlSchoolToDay"
		}
	}
});