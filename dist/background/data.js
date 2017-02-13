define("background/data", function(require, exports, module){
var data = [{
    // home
    "Location": "BEJ",
    // secure-question
    "Questions": 1,
    "Answer": "CHINA",
    // personal1
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
	"Country": "CHIN",
	// personal2
	"Nationality": "CHIN",
	"OtherNationalityInd": "Y",
	"OtherNationality": "AZR",
	"OtherPassportInd": "Y",
	"OtherPassport": "ABCDEFGHIJK",
	"PermResOtherCountryInd": "Y",
	"PermResOtherCountry": "ANGU",
	"NationalId": "520512196709090001",
	"NationalIdNA": true,
	"Ssn1": "123",
	"Ssn2": "45",
	"Ssn3": "6789",
	"SsnNA": "Y",
	"TaxId": "XD451134134",
	"TaxIdNA": "N",
	// AddressPhone
	"AddressLine1": "address1",
	"AddressLine2": "address2",
	"AddressCity": "citycity",
	"AddressState": "abc",
	"AddressStateNA": true,
	"AddressPostalZone": "ddd",
	"AddressPostalZoneNA": false,
	"AddressCountry": "CHIN",
	"MailingAddressSame": "N",
	"MailingAddressLine1": "m address1",
	"MailingAddressLine2": "m address2",
	"MailingAddressCity": "m city",
	"MailingAddressState": "m abc",
	"MailingAddressStateNA": false,
	"MailingAddressPostalZone": "m ddd",
	"MailingAddressPostalZoneNA": true,
	"MailingAddressCountry": "CHIN",
	"PrimaryPhone": "123456789",
	"SecondaryPhone": "987654321",
	"SecondaryPhoneNA": false,
	"WorkPhone": "999999999",
	"WorkPhoneNA": false,
	"Email": "abc@ddd.com",
	// passport
	"PassportType": "R",
	"PassportNumber": "DFA2434",
	"PassportBookNumber": "454523452345",
	"PassportBookNumberNA": false,
	"IssuedCountry": "CHIN",
	"IssuedInCity": "cit",
	"IssuedInState": "stat",
	"IssuedInCountry": "CHIN",
	"IssuedYear": "2010",
	"IssuedMonth": "06",
	"IssuedDay": "06",
	"ExpireYear": "2020",
	"ExpireMonth": "06",
	"ExpireDay": "06",
	"ExpireNA": false,
	"LostPassportInd": "Y",
	"LostPassportNumber": "DF743948",
	"LostPassportNumberUnknowInd": true,
	"LostPassportCountry": "CHIN",
	"LostPassportExplain": "LALALA",
	//
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
});

if(false){
	require("background/data");
}