var data = [{
    // home
    "Location": "BEJ",
    // secure-question
    "Questions": 1,
    "Answer": "CHINA",
    // personal1
    "Personal1": {
	    "SurName": "XING",
	    "GivenName": "ZHONG",
	    "FullName": "XING ZHONG",
	    "FullNameNA": false,
	    "HasOtherName": "Y",
	    "OtherNames": [{
		    "SurName": "a",
		    "GivenName": "b"
	    }, {
		    "SurName": "c",
		    "GivenName": "d"
	    }],
	    "HasTelecode": "Y",
		"TelecodeSurName": "0001",
		"TelecodeGivenName": "0101",
		"Gender": "F",
		"MaritalStatus": "O",
		"OtherMaritalStatus": "LALALA",
		"Birth": "1988-06-06",
		"City": "BEIJING",
		"Province": "BEIJING",
		"ProvinceNA": false,
		"Country": "CHIN"
    },
	// personal2
	"Personal2": {
		"Nationality": "CHIN",
		"HasOtherNationality": "Y",
		"OtherNationalitys": [{
			"Nationality": "AZR",
			"HasPassport": "Y",
			"PassportNum": "ABCDEFGHIJK"
		}, {
			"Nationality": "ALB",
			"HasPassport": "Y",
			"PassportNum": "ddddddddd"
		}],
		"HasPermResOtherCountry": "Y",
		"PermResOtherCountrys": [{
			"Country": "ANGU"
		}, {
			"Country": "ALGR"
		}],
		"NationalId": "520512196709090001",
		"NationalIdNA": true,
		"SSN1": "123",
		"SSN2": "45",
		"SSN3": "6789",
		"SSNNA": false,
		"TaxId": "451134134",
		"TaxIdNA": false
	},
	// AddressPhone
	"AddressPhone": {
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
		"Email": "abc@ddd.com"
	},
	// passport
	"Passport": {
		"PassportType": "R",
		"PassportNumber": "DFA2434",
		"PassportBookNumber": "454523452345",
		"PassportBookNumberNA": false,
		"IssuedCountry": "CHIN",
		"IssuedInCity": "cit",
		"IssuedInState": "stat",
		"IssuedInCountry": "CHIN",
		"IssuedDate": "2010-06-06",
		"ExpireDate": "2020-06-06",
		"ExpireNA": false,
		"HasLostPassport": "Y",
		"LostPassports": [{
			"Number": "DF743948",
			"NumberUnknow": true,
			"Country": "CHIN",
			"Explain": "LALALA",
		},{
			"Number": "sss999",
			"NumberUnknow": true,
			"Country": "CHIN",
			"Explain": "ddd",
		}]
	},
	// travel
	"Travel": {
		"SpecificTravel": "Y",
		"ArriveDate": "2017-05-01",
		"ArriveFlight": "abc",
		"ArriveCity": "ddd",
		"DepartDate": "2017-06-01",
		"DepartFlight": "abc",
		"DepartCity": "ddd",
		"SpectravelLocations": [{
			"SpectravelLocation": "lala"
		}, {
			"SpectravelLocation": "lala2"
		}],
		"StayStreetAddress1": "aaa",
		"StayStreetAddress2": "bbb",
		"StayCity": "ccc",
		"StayState": "CT",
		"StayZIPCode": "999",
		"WhoIsPaying": "O",
		"PayerSurname": "namea",
		"PayerGivenName": "nameb",
		"PayerPhone": "666",
		"PayerEmail": "ddd@ddd.com",
		"PayerEmailNA": false,
		"PayerRelationship": "F",
		"PayerAddrSameAsInd": "N",
		"PayerStreetAddress1": "ad1",
		"PayerStreetAddress2": "ad2",
		"PayerCity": "sh",
		"PayerStateProvince": "sh",
		"PayerStateProvinceNA": false,
		"PayerPostalZIPCode": "555",
		"PayerPostalZIPCodeNA": false,
		"PayerCountry": "CHIN"
	}
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