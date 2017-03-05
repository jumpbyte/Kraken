module.exports = function(data){
	var personalInfo = data.personalInfo;

	var Personal1 = {};

	Personal1.SurName = personalInfo.name.surnName;
	Personal1.GivenName = personalInfo.name.givenName;
	Personal1.FullName = personalInfo.name.fullName;
	Personal1.FullNameNA = !Personal1.FullName;
	Personal1.HasOtherName = personalInfo.usedOtherName;
	if(Personal1.HasOtherName){
		Personal1.OtherNames = personalInfo.otherNames.map(function(name){
			return {
				SurName: name.surnName,
				GivenName: name.givenName
			};
		});
	}
	Personal1.HasTelecode = personalInfo.haveTelecode;
	if(Personal1.HasTelecode){
		Personal1.TelecodeSurName = personalInfo.telecodeSurnName;
		Personal1.TelecodeGivenName = personalInfo.telecodeGivenName;
	}
	Personal1.Gender = personalInfo.birth.sex ? "M" : "F";
	Personal1.MaritalStatus = personalInfo.maritalStatus;
	Personal1.Birth = personalInfo.birth.birthDate;
	Personal1.Country = personalInfo.birth.country;
	Personal1.Province = personalInfo.birth.province;
	Personal1.ProvinceNA = !Personal1.Province;
	Personal1.City = personalInfo.birth.city;

	var Personal2 = {};

	Personal2.Nationality = personalInfo.nationality;
	Personal2.HasOtherNationality = personalInfo.holdOtherNationality;
	if(Personal2.HasOtherNationality){
		Personal2.OtherNationalitys = personalInfo.nationalities.map(function(nationality){
			return {
				Nationality: nationality.name,
				HasPassport: nationality.holdThePassport,
				PassportNum: nationality.passportNumber
			};
		});
	}
	Personal2.HasPermResOtherCountry = personalInfo.permanent;
	if(Personal2.HasPermResOtherCountry){
		Personal2.PermResOtherCountrys = personalInfo.permanentCountries.map(function(countryName){
			return {
				Country: countryName
			};
		});
	}

	Personal2.NationalIdNA = !personalInfo.isHaveIdCard;
	if(!Personal2.NationalIdNA){
		Personal2.NationalId = personalInfo.idCard;
	}

	Personal2.SSNNA = !personalInfo.isHaveSecurityNumber;
	if(!Personal2.SSNNA){
		(function(securityNumber){
			securityNumber = securityNumber.split("-");
			return {
				SSN1: securityNumber[0],
				SSN2: securityNumber[1],
				SSN3: securityNumber[2]
			};
		})(personalInfo.securityNumber);
	}
	
	Personal2.TaxIdNA = !personalInfo.isHaveTaxpayerNumber;
	if(!Personal2.TaxIdNA){
		Personal2.TaxId = personalInfo.taxpayerNumber;
	}

	return {
		Personal1: Personal1,
		Personal2: Personal2
	};
}