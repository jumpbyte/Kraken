// @entry
var Page = require("lib/page");
var Type = require("lib/type");

Page("Sign", function(data){
   	var $noRadio=$("#ctl00_SiteContentPlaceHolder_FormView3_rblPREP_IND_1");
	if($noRadio && $noRadio.length>0){
		$noRadio.attr("checked",true);
		$("#__EVENTTARGET").val("ctl00$SiteContentPlaceHolder$FormView3$rblPREP_IND$1");
		$("#ctl00_SiteContentPlaceHolder_PPTNumTbx").val(data.PassportNum);
	}
});