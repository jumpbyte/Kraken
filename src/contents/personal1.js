require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");
require("lib/background").ready(function(info){
	var hash = {
		"SurName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SURNAME",
		"GivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_GIVEN_NAME",
		"FullName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_FULL_NAME_NATIVE",
		"FullNameNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_FULL_NAME_NATIVE_NA",
		"OtherNames": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherNames",
		"OtherNames-SurName": "ctl00$SiteContentPlaceHolder$FormView1$DListAlias$ctl00$tbxSURNAME",
		"OtherNames-GivenName": "ctl00$SiteContentPlaceHolder$FormView1$DListAlias$ctl00$tbxGIVEN_NAME",
		"HasTelecode": "ctl00$SiteContentPlaceHolder$FormView1$rblTelecodeQuestion",
		"TelecodeSurName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_TelecodeSURNAME",
		"TelecodeGivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_TelecodeGIVEN_NAME",
		"Gender": "ctl00$SiteContentPlaceHolder$FormView1$rblAPP_GENDER",
		"MaritalStatus": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_MARITAL_STATUS",
		"OtherMaritalStatus": "ctl00$SiteContentPlaceHolder$FormView1$tbxOtherMaritalStatus",
		"Birth": {
			"Year": "ctl00$SiteContentPlaceHolder$FormView1$tbxDOBYear",
			"Month": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBMonth",
			"Day": "ctl00$SiteContentPlaceHolder$FormView1$ddlDOBDay",
		},
		"City": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_POB_CITY",
		"Province": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_POB_ST_PROVINCE",
		"ProvinceNA": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_POB_ST_PROVINCE_NA",
		"Country": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_POB_CNTRY"
	};
	var PersonalEntity = Entity({
		// 姓氏
		"SurName": {},
		// 名字
		"GivenName": {},
		// 全名
		"FullName": {},
		// 是否无法提供全名
		"FullNameNA": {
			"type": Type.Bool
		},
		// 是否有曾用名
		"HasOtherName": {
			"type": Type.YN,
			"default": "N",
			"subs": {
				"Y": {
					// 曾用名列表
					"OtherNames": {
						"type": Type.Array,
						"item": {
							// 曾用名姓氏
							"SurName": {},
							// 曾用名名字
							"GivenName": {}
						}
					}
				}
			}
		},
		// 是否有有名字的电报码
		"HasTelecode": {
			"type": Type.YN,
			"default": "N",
			"subs": {
				"Y": {
					// 电报码姓氏
					"TelecodeSurName": {},
					// 电报码名字
					"TelecodeGivenName": {}
				}
			}
		},
		// 性别
		"Gender": {
			"type": Type.Enum
		},
		// 婚姻状况
		"MaritalStatus": {
			"type": Type.Enum,
			"subs": {
				"O": {
					// 其他类型婚姻状况描述
					"OtherMaritalStatus": {}
				}
			}
		},
		// 出生日期
		"Birth": {
			"type": Type.DateEn
		},
		// 出生城市
		"City": {},
		// 出生省份
		"Province": {},
		// 是否无法提供出生省份
		"ProvinceNA": {
			"type": Type.Bool
		},
		// 出生国家
		"Country": {
			"type": Type.Enum
		}
	});
	form.event({
		"ctl00$ScriptManager1": "ctl00$SiteContentPlaceHolder$FormView1$UpdatePanel1|ctl00$SiteContentPlaceHolder$FormView1$rblOtherNames$0",
		"__EVENTTARGET": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherNames$0"
	});
	//var data = PersonalEntity(info.data);
	//form.set(data, hash);
	// $("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
});