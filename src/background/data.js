var data = [{
    // home
    "Location": "BEJ",
    // secure-question
    "Questions": 1,
    "Answer": "CHINA",
    // complete-personal
    "SurName": "XING",
    "GivenName": "ZHONG",
    "FullNameNative": "XING ZHONG",
    "FullNameNativeNA": true,
    "OtherNames": "N",
    "TelecodeQuestion": "Y",
	"TelecodeSurName": "0001",
	"TelecodeGivenName": "0101",
	"Gender": "F",
	"MaritalStatus": "O",
	"OtherMaritalStatus": "LALALA",
	"BirthYear": "1988",
	"BirthMonth": "FEB",
	"BirthDay": "03",
	"City": "BEIJING",
	"Province": "BEIJING",
	"ProvinceNA": false,
	"Country": "CHIN"
}];

module.exports = {
	get: function(callback){
		if(data.length){
			callback(data[0]);
		}else{
			$.ajax({
				url: "",
				onSuccess: function(result){
					data = result.data;
					callback(data[0]);
				}
			});
		}
	},
	remove: function(){
		if(data.length){
			data.shift();
		}
	}
};