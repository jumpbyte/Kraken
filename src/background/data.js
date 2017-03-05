var data = [{
	formId: 10101,
	data: {
	    // home
	    "Home": {
		    "Location": "BEJ"
		},
	    // secure-question
		"SecureQuestion": {
		    "Questions": 1,
		    "Answer": "CHINA"
		},
	    // personal1
	    "Personal1": {
		    "SurName": "XING",
		    "GivenName": "ZHONG",
		    "FullName": "XING ZHONG",
		    "FullNameNA": false,
		    "HasOtherName": true,
		    "OtherNames": [{
			    "SurName": "a",
			    "GivenName": "b"
		    }, {
			    "SurName": "c",
			    "GivenName": "d"
		    }],
		    "HasTelecode": true,
			"TelecodeSurName": "0001",
			"TelecodeGivenName": "0101",
			"Gender": "F",
			"MaritalStatus": "W",//"D",
			//"MaritalStatus": "M",
			// "MaritalStatus": "O",
			// "OtherMaritalStatus": "LALALA",
			"Birth": "1988-06-06",
			"City": "BEIJING",
			"Province": "BEIJING",
			"ProvinceNA": false,
			"Country": "CHIN"
	    },
		// personal2
		"Personal2": {
			"Nationality": "CHIN",
			"HasOtherNationality": true,
			"OtherNationalitys": [{
				"Nationality": "AZR",
				"HasPassport": true,
				"PassportNum": "ABCDEFGHIJK"
			}, {
				"Nationality": "ALB",
				"HasPassport": true,
				"PassportNum": "ddddddddd"
			}],
			"HasPermResOtherCountry": true,
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
			"MailingAddressSame": false,
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
			"Type": "R",
			"Number": "DFA2434",
			"BookNumber": "454523452345",
			"BookNumberNA": false,
			"Country": "CHIN",
			"IssuedCity": "cit",
			"IssuedState": "stat",
			"IssuedCountry": "CHIN",
			"IssuedDate": "2010-06-06",
			"ExpireDate": "2020-06-06",
			"ExpireNA": false,
			"HasLostPassport": true,
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
			"SpecificTravel": true,
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
			"StayZIPCode": "99999",
			"WhoIsPaying": "O",
			"PayerSurname": "namea",
			"PayerGivenName": "nameb",
			"PayerPhone": "666",
			"PayerEmail": "ddd@ddd.com",
			"PayerEmailNA": false,
			"PayerRelationship": "F",
			"PayerAddrSameAsInd": false,
			"PayerStreetAddress1": "ad1",
			"PayerStreetAddress2": "ad2",
			"PayerCity": "sh",
			"PayerStateProvince": "sh",
			"PayerStateProvinceNA": false,
			"PayerPostalZIPCode": "55567",
			"PayerPostalZIPCodeNA": false,
			"PayerCountry": "CHIN"
		},
		// travel-companions
		"TravelCompanions": {
			"HasOtherPersons": true,
			"IsGroupTravel": false,
			"Persons": [{
				"Surname": "zhang",
				"GivenName": "san",
				"Relationship": "B"
			}, {
				"Surname": "li",
				"GivenName": "si",
				"Relationship": "O"
			}]
		},
		//
		"PreviousUSTravel": {
			"HasPrevUSTravel": true,
			"Travels": [{
				"ArrivedDate": "2010-01-01",
				"StayLength": "10",
				"StayLengthCD": "D"
			}, {
				"ArrivedDate": "2011-01-01",
				"StayLength": "2",
				"StayLengthCD": "M"
			}],
			"HasUSDriverLicense": true,
			"DriverLicenses": [{
				"LicenseNum": "123456",
				"LicenseNumUnknow": false,
				"LicenseState": "AL"
			}, {
				"LicenseNum": "765432",
				"LicenseNumUnknow": false,
				"LicenseState": "AK"
			}],
			"HasPrevVisa": true,
			"PrevVisaIssuedDate": "2009-09-09",
			"VisaNum": "00000000",
			"VisaNumNA": false,
			"IsPrevVisaSameType": true,
			"IsPrevVisaSameCountry": false,
			"IsPrevVisaTenPrint": true,
			"IsPrevVisaLost": true,
			"PrevVisaLostYear": "2012",
			"PrevVisaLostExplain": "lost lost",
			"IsPrevVisaCancelled": true,
			"PrevVisaCancelExplain": "no no no",
			"IsPrevVisaRefused": true,
			"PrevVisaRefusedExplain": "la la la",
			"IsIVPetition": true,
			"IVPetitionExplain": "gogogo"
		},
		// us-contact
		"USContact": {
			"Surname": "wang",
			"GivenName": "wu",
			"NameNA": false,
			"Organization": "hao lai wu",
			"OrganizationNA": false,
			"Relationship": "C",
			"Address1": "addr1",
			"Address2": "addr2",
			"City": "jiu jin shan",
			"State": "AL",
			"ZipCode": "66666",
			"PhoneNum": "7777777",
			"Email": "abc@abc.com",
			"EmailNA": false
		},
		//
		"Relatives": {
			"FathersSurname": "zhang",
			"FathersSurnameUnknow": false,
			"FathersGivenName": "san",
			"FathersGivenNameUnknow": false,
			"FathersBirth": "1970-07-07",
			"FathersBirthUnknow": false,
			"IsFatherLiveInUS": true,
			"FathersStatus": "S",
			"MothersSurname": "li",
			"MothersSurnameUnknow": false,
			"MothersGivenName": "si",
			"MothersGivenNameUnknow": false,
			"MothersBirth": "1972-02-02",
			"MothersBirthUnknow": false,
			"IsMotherLiveInUS": true,
			"MothersStatus": "S",
			"HasOtherRelatives": true,
			"OtherRelatives": [{
				"Surname": "xiao",
				"GivenName": "hei",
				"Relationship": "F",
				"RelativesStatus": "C"
			}, {
				"Surname": "da",
				"GivenName": "bai",
				"Relationship": "F",
				"RelativesStatus": "C"
			}]
		},
		// PrevSpouse
		"PrevSpouse": {
			"NumberOfPrevSpouses": 2,
			"PrevSpouses": [{
				"Surname": "zhao",
				"GivenName": "da",
				"Birth": "1990-01-01",
				"Nationality": "CHIN",
				"City": "dalian",
				"CityUnknow": false,
				"Country": "CHIN",
				"MarriageDate": "2010-01-01",
				"MarriageEndedDate": "2011-02-01",
				"MarriageEndedExplain": "wu",
				"MarriageEndedCountry": "CHIN"
			},{
				"Surname": "qian",
				"GivenName": "er",
				"Birth": "1992-02-02",
				"Nationality": "CHIN",
				"City": "sichuan",
				"CityUnknow": false,
				"Country": "CHIN",
				"MarriageDate": "2012-02-02",
				"MarriageEndedDate": "2013-09-01",
				"MarriageEndedExplain": "wu",
				"MarriageEndedCountry": "CHIN"
			}]
		},
		// DeceasedSpouse
		"DeceasedSpouse": {
			"Surname": "SURNAME",
			"GivenName": "GIVEN_NAME",
			"Birth": "2012-02-02",
			"Nationality": "CHIN",
			"City": "City",
			"CityUnknow": false,
			"Country": "Country"
		},
		// WorkEducation
		"WorkEducation1": {
			"PresentOccupation": "O",
			"ExplainOtherPresentOccupation": "lalala",
			"EmpSchName": "kong dao yi zhong",
			"EmpSchAddr1": "kong dao huan dao nan lu",
			"EmpSchAddr2": "kong dao huan dao dong lu",
			"EmpSchCity": "kong cheng",
			"EmpSchState": "kong zhou",
			"EmpSchStateNA": false,
			"EmpSchZipCode": "",
			"EmpSchZipCodeNA": true,
			"PhoneNum": "0002030",
			"EmpSchCountry": "CHIN",
			"CurrMonthlySalary": "100000",
			"CurrMonthlySalaryNA": false,
			"DescribeDuties": "no no no"
		},
		"WorkEducation2": {
			"PreviouslyEmployed": true,
			"Employers": [{
				"EmployerName": "gong zuo 1",
				"EmployerStreetAddress1": "di zhi 1",
				"EmployerStreetAddress2": "di zhi 2",
				"EmployerCity": "cheng shi",
				"EmployerState": "zhou",
				"EmployerStateNA": false,
				"EmployerZipCode": "77777",
				"EmployerZipCodeNA": false,
				"EmployerCountry": "CHIN",
				"EmployerPhone": "1234567",
				"JobTitle": "zong jian",
				"SupervisorSurname": "zhang",
				"SupervisorSurnameNA": false,
				"SupervisorGivenName": "san",
				"SupervisorGivenNameNA": false,
				"EmployerDateFrom": "2009-07-01",
				"EmployerDateTo": "2012-06-30",
				"DescribeDuties": "go go go"
			}, {
				"EmployerName": "gong zuo 2",
				"EmployerStreetAddress1": "di zhi 1 a",
				"EmployerStreetAddress2": "di zhi 2 a",
				"EmployerCity": "cheng shi 2",
				"EmployerState": "zhou",
				"EmployerStateNA": false,
				"EmployerZipCode": "88888",
				"EmployerZipCodeNA": false,
				"EmployerCountry": "CHIN",
				"EmployerPhone": "1234567",
				"JobTitle": "zong jian",
				"SupervisorSurname": "zhang",
				"SupervisorSurnameNA": false,
				"SupervisorGivenName": "san",
				"SupervisorGivenNameNA": false,
				"EmployerDateFrom": "2012-07-01",
				"EmployerDateTo": "2016-06-30",
				"DescribeDuties": "go go go"
			}],
			"OtherEduc": true,
			"Schools": [{
				"SchoolName": "xue xiao 1",
				"SchoolAddr1": "addr1",
				"SchoolAddr2": "addr2",
				"SchoolCity": "city",
				"SchoolState": "state",
				"SchoolStateNA": false,
				"SchoolZipCode": "66666",
				"SchoolZipCodeNA": false,
				"SchoolCountry": "CHIN",
				"SchoolCourseOfStudy": "lalala",
				"SchoolDateFrom": "2000-09-01",
				"SchoolDateTo": "2003-07-01"
			}, {
				"SchoolName": "xue xiao 2",
				"SchoolAddr1": "address1",
				"SchoolAddr2": "address2",
				"SchoolCity": "chengshi",
				"SchoolState": "state",
				"SchoolStateNA": false,
				"SchoolZipCode": "66666",
				"SchoolZipCodeNA": false,
				"SchoolCountry": "CHIN",
				"SchoolCourseOfStudy": "lalala",
				"SchoolDateFrom": "2003-09-01",
				"SchoolDateTo": "2006-07-01"
			}]
		},
		"WorkEducation3": {
			"IsBelongClan": true,
			"ClanName": "clan name",
			"LanguageNames": [{
				"LanguageName": "china"
			}, {
				"LanguageName": "english"
			}],
			"IsCountrysVisited": true,
			"CountrysVisited": [{
				"Country": "ANTI"
			}, {
				"Country": "AZR"
			}],
			"IsBelongOrganization": true,
			"OrganizationNames": [{
				"Name": "zu zhi"
			}],
			"HasSpecializedSkills": true,
			"SpecializedSkillExplain": "no zuo no die",
			"IsMilitaryService": true,
			"Militarys": [{
				"Country": "CHIN",
				"Branch": "branch",
				"Rank": "rank",
				"Specialty": "sp",
				"FromDate": "2007-07-07",
				"ToDate": "2008-08-08"
			}],
			"IsInsurgent": true,
			"InsurgentExplain": "lalalala"
		},
		"SecurityandBackground1": {
			"Disease": true,
			"DiseaseExplain": "Disease",
			"Disorder": true,
			"DisorderExplain": "Disorder",
			"Druguser": true,
			"DruguserExplain": "Druguser"
		},
		"SecurityandBackground2": {
			"Arrested": true,
			"ArrestedExplain": "Arrested",
			"ControlledSubstances": true,
			"ControlledSubstancesExplain": "ControlledSubstances",
			"Prostitution": true,
			"ProstitutionExplain": "Prostitution",
			"MoneyLaundering": true,
			"MoneyLaunderingExplain": "MoneyLaundering",
			"HumanTrafficking": true,
			"HumanTraffickingExplain": "HumanTrafficking",
			"AssistedSevereTrafficking": true,
			"AssistedSevereTraffickingExplain": "AssistedSevereTrafficking",
			"HumanTraffickingRelated": true,
			"HumanTraffickingRelatedExplain": "HumanTraffickingRelated"
		},
		"SecurityandBackground3": {
			"IllegalActivity": true,
			"IllegalActivityExplain": "IllegalActivity",
			"TerroristActivity": true,
			"TerroristActivityExplain": "TerroristActivity",
			"TerroristSupport": true,
			"TerroristSupportExplain": "TerroristSupport",
			"TerroristOrg": true,
			"TerroristOrgExplain": "TerroristOrg",
			"Genocide": true,
			"GenocideExplain": "Genocide",
			"Torture": true,
			"TortureExplain": "Torture",
			"ExViolence": true,
			"ExViolenceExplain": "ExViolence",
			"ChildSoldier": true,
			"ChildSoldierExplain": "ChildSoldier",
			"ReligiousFreedom": true,
			"ReligiousFreedomExplain": "ReligiousFreedom",
			"PopulationControls": true,
			"PopulationControlsExplain": "PopulationControls",
			"Transplant": true,
			"TransplantExplain": "Transplant"
		},
		"SecurityandBackground4": {
			"RemovalHearing": true,
			"RemovalHearingExplain": "RemovalHearing",
			"ImmigrationFraud": true,
			"ImmigrationFraudExplain": "ImmigrationFraud",
			"FailToAttend": true,
			"FailToAttendExplain": "FailToAttend",
			"VisaViolation": true,
			"VisaViolationExplain": "VisaViolation"
		},
		"SecurityandBackground5": {
			"ChildCustody": true,
			"ChildCustodyExplain": "ChildCustody",
			"VotingViolation": true,
			"VotingViolationExplain": "VotingViolation",
			"RenounceExp": true,
			"RenounceExpExplain": "RenounceExp",
			"AttWoReimb": true,
			"AttWoReimbExplain": "AttWoReimb"
		}
	}
}];

var dataTransfer = require("./data-transfer");
var options = require("./options");
var config = require("config");

module.exports = {
	get: function(callback){
		if(data.length){
			callback(data[0].data);
		}else{
			$.ajax({
				url: options.requestUrl || config["request-url"],
				onSuccess: function(result){
					result.data.data = dataTransfer(result.data.data);
					data.push(result.data);
					callback(data[0].data);
				}
			});
		}
	},
	submit: function(acceptNum){
		if(data.length){
			var item = data.shift();
			$.ajax({
				url: options.submitUrl || config["submit-url"],
				data: {
					acceptNum: acceptNum,
					formId: item.formId,
					status: 1
				},
				onSuccess: function(result){}
			});
		}
	}
};