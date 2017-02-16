require("lib/jquery");
var form = require("lib/form");
var Type = require("lib/type");
var Entity = require("lib/entity");

form.init([
	'tctl00$ucNavigateOption$ucNavPanel$updConfirm',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel1',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel2',
	'tctl00$SiteContentPlaceHolder$FormView1$UpdatePanel3'
]);

require("lib/background").ready(function(info){
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
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherNames",
			"subs": {
				"Y": {
					// 曾用名列表
					"OtherNames": {
						"type": Type.Array,
						"event-target": "ctl00$SiteContentPlaceHolder$FormView1$DListAlias$ctl00$InsertButtonAlias",
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
			"event-target": {
				"Y": "ctl00$SiteContentPlaceHolder$FormView1$rblTelecodeQuestion$0"
			},
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
			"event-target": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_MARITAL_STATUS",
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
	}, {
		"SurName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_SURNAME",
		"GivenName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_GIVEN_NAME",
		"FullName": "ctl00$SiteContentPlaceHolder$FormView1$tbxAPP_FULL_NAME_NATIVE",
		"FullNameNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_FULL_NAME_NATIVE_NA",
		"HasOtherName": "ctl00$SiteContentPlaceHolder$FormView1$rblOtherNames",
		"OtherNames.SurName": "ctl00$SiteContentPlaceHolder$FormView1$DListAlias$ctl0{0}$tbxSURNAME",
		"OtherNames.GivenName": "ctl00$SiteContentPlaceHolder$FormView1$DListAlias$ctl0{0}$tbxGIVEN_NAME",
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
		"ProvinceNA": "ctl00$SiteContentPlaceHolder$FormView1$cbxAPP_POB_ST_PROVINCE_NA",
		"Country": "ctl00$SiteContentPlaceHolder$FormView1$ddlAPP_POB_CNTRY"
	});

	var data = PersonalEntity(info.data.Personal1);
	form.set(data, function(){
		$("#ctl00_SiteContentPlaceHolder_UpdateButton3").click();
	});
});