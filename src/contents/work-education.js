require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm'
]);

require("lib/background").ready(function(info){
	if($("#ctl00_SiteContentPlaceHolder_FormView1_ddlPresentOccupation").val() !== info.data.WorkEducation.PresentOccupation){
		$("#ctl00_SiteContentPlaceHolder_FormView1_ddlPresentOccupation").val(info.data.WorkEducation.PresentOccupation);
		$("#__EVENTTARGET").val("ctl00$SiteContentPlaceHolder$FormView1$ddlPresentOccupation");
		$("#aspnetForm").submit();
	}else{
		var InfoEntity = {
			"EmpSchName": {},
			"EmpSchAddr1": {},
			"EmpSchAddr2": {},
			"EmpSchCity": {},
			"EmpSchState": {},
			"EmpSchStateNA": {
				"type": Type.Bool
			},
			"EmpSchZipCode": {},
			"EmpSchZipCodeNA": {
				"type": Type.Bool
			},
			"PhoneNum": {},
			"EmpSchCountry": {
				"type": Type.Enum
			},
			"CurrMonthlySalary": {},
			"CurrMonthlySalaryNA": {
				"type": Type.Bool
			},
			"DescribeDuties": {}
		};

		var WorkEducationEntity = Entity({
			"PresentOccupation": {
				"type": Type.Enum,
				"subs": {
					"H,RT": {},
					"N": {
						"ExplainOtherPresentOccupation": {}
					},
					"O": Object.assign({
						"ExplainOtherPresentOccupation": {}
					}, InfoEntity),
					"__OTHER__": InfoEntity
				}
			}
		}, {
			"PresentOccupation": "ctl00$SiteContentPlaceHolder$FormView1$ddlPresentOccupation",
			"ExplainOtherPresentOccupation": "ctl00$SiteContentPlaceHolder$FormView1$tbxExplainOtherPresentOccupation",
			"EmpSchName": "ctl00$SiteContentPlaceHolder$FormView1$tbxEmpSchName",
			"EmpSchAddr1": "ctl00$SiteContentPlaceHolder$FormView1$tbxEmpSchAddr1",
			"EmpSchAddr2": "ctl00$SiteContentPlaceHolder$FormView1$tbxEmpSchAddr2",
			"EmpSchCity": "ctl00$SiteContentPlaceHolder$FormView1$tbxEmpSchCity",
			"EmpSchState": "ctl00$SiteContentPlaceHolder$FormView1$tbxWORK_EDUC_ADDR_STATE",
			"EmpSchStateNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxWORK_EDUC_ADDR_STATE_NA",
			"EmpSchZipCode": "ctl00$SiteContentPlaceHolder$FormView1$tbxWORK_EDUC_ADDR_POSTAL_CD",
			"EmpSchZipCodeNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxWORK_EDUC_ADDR_POSTAL_CD_NA",
			"PhoneNum": "ctl00$SiteContentPlaceHolder$FormView1$tbxWORK_EDUC_TEL",
			"EmpSchCountry": "ctl00$SiteContentPlaceHolder$FormView1$ddlEmpSchCountry",
			"CurrMonthlySalary": "ctl00$SiteContentPlaceHolder$FormView1$tbxCURR_MONTHLY_SALARY",
			"CurrMonthlySalaryNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxCURR_MONTHLY_SALARY_NA",
			"DescribeDuties": "ctl00$SiteContentPlaceHolder$FormView1$tbxDescribeDuties"
		});

		var data = WorkEducationEntity(info.data.WorkEducation);
		form.set(data, function(){
			$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
		});
	}
});