function transPersonal(data){
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
	// Personal2.NationalId = 
	// Personal2.NationalIdNA = 
	Personal2.SSNNA = !personalInfo.securityNumber;
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
	Personal2.TaxIdNA = !personalInfo.taxpayerNumber;
	if(!Personal2.TaxIdNA){
		Personal2.TaxId = personalInfo.taxpayerNumber;
	}

	return {
		Personal1: Personal1,
		Personal2: Personal2
	};
}

function transAddressPhone(data){
	var AddressPhone = {};

	var addrPhoneInfo = data.addrPhoneInfo;

	AddressPhone.AddressLine1 = addrPhoneInfo.homeAddr.street;
	AddressPhone.AddressCountry = addrPhoneInfo.homeAddr.country;
	AddressPhone.AddressStateNA = !addrPhoneInfo.homeAddr.province;
	if(!AddressPhone.AddressStateNA){
		AddressPhone.AddressState = addrPhoneInfo.homeAddr.province;
	}
	AddressPhone.AddressCity = addrPhoneInfo.homeAddr.city;
	AddressPhone.AddressPostalZoneNA = !addrPhoneInfo.homeAddr.postCode;
	if(!AddressPhone.AddressPostalZoneNA){
		AddressPhone.AddressPostalZone = addrPhoneInfo.homeAddr.postCode;
	}
	AddressPhone.MailingAddressSame = addrPhoneInfo.sameAddress;
	if(!AddressPhone.MailingAddressSame){
		AddressPhone.MailingAddressLine1 = addrPhoneInfo.mailingAddr.street;
		AddressPhone.MailingAddressCountry = addrPhoneInfo.mailingAddr.country;
		AddressPhone.MailingAddressStateNA = !addrPhoneInfo.mailingAddr.province;
		if(!AddressPhone.MailingAddressStateNA){
			AddressPhone.MailingAddressState = addrPhoneInfo.mailingAddr.province;
		}
		AddressPhone.MailingAddressCity = addrPhoneInfo.mailingAddr.city;
		AddressPhone.MailingAddressPostalZoneNA = !addrPhoneInfo.mailingAddr.postCode;
		if(!AddressPhone.MailingAddressPostalZoneNA){
			AddressPhone.MailingAddressPostalZone = addrPhoneInfo.mailingAddr.postCode;
		}
	}
	AddressPhone.PrimaryPhone = addrPhoneInfo.primaryPhone;
	AddressPhone.SecondaryPhoneNA = !addrPhoneInfo.secondaryPhone;
	if(!AddressPhone.SecondaryPhoneNA){
		AddressPhone.SecondaryPhone = addrPhoneInfo.secondaryPhone;
	}
	AddressPhone.WorkPhoneNA = !addrPhoneInfo.workPhone;
	if(!AddressPhone.WorkPhoneNA){
		AddressPhone.WorkPhone = addrPhoneInfo.workPhone;
	}
	AddressPhone.Email = addrPhoneInfo.email;

	return AddressPhone;
}

function transPassport(data){
	var Passport = {};

	var passportInfo = data.passportInfo;

	Passport.PassportType = passportInfo.type;
	Passport.PassportNumber = passportInfo.passportNum;
	Passport.PassportBookNumberNA = !passportInfo.passportBookNum;
	if(!Passport.PassportBookNumberNA){
		Passport.PassportBookNumber = passportInfo.passportBookNum;
	}
	Passport.IssuedCountry = passportInfo.country;
	Passport.IssuedInCountry = passportInfo.issuedCountry;
	Passport.IssuedInState = passportInfo.issuedProvince;
	Passport.IssuedInCity = passportInfo.issuedCity;
	Passport.IssuedDate = passportInfo.issuanceDate;
	Passport.ExpireNA = !passportInfo.expirationDate;
	if(!Passport.ExpireNA){
		Passport.ExpireDate = passportInfo.expirationDate;
	}
	Passport.HasLostPassport = passportInfo.haveLostBefore;
	if(Passport.HasLostPassport){
		Passport.LostPassports = passportInfo.lostInfoList.map(function(lostInfo){
			return {
				Number: lostInfo.passportNum,
				NumberUnknow: !lostInfo.passportNum,
				Country: lostInfo.country,
				Explain: lostInfo.explain
			};
		});
	}

	return Passport;
}

function transTravel(data){
	var Travel = {};

	var travelInfo = data.travelInfo;

	Travel.SpecificTravel = travelInfo.madePlan;
	if(Travel.SpecificTravel){
		Travel.ArriveDate = travelInfo.itinerary.arrivalDate;
		Travel.ArriveFlight = travelInfo.itinerary.arrivalFlight;
		Travel.ArriveCity = travelInfo.itinerary.arrivalCity;
		Travel.DepartDate = travelInfo.itinerary.departureDate;
		Travel.DepartFlight = travelInfo.itinerary.departureFlight;
		Travel.DepartCity = travelInfo.itinerary.departureCity;
		Travel.SpectravelLocations = travelInfo.itinerary.visitLocations.map(function(location){
			return {
				SpectravelLocation: location
			};
		});
	}else{

	}

	Travel.StayStreetAddress1 = travelInfo.stayInfo.street;
	Travel.StayState = travelInfo.state;
	Travel.StayCity = travelInfo.city;
	Travel.StayZIPCode = travelInfo.zipCode;

	Travel.WhoIsPaying = travelInfo.payFeeType;
	Travel.PayerSurname = travelInfo.payPerson.surnName;
	Travel.PayerGivenName = travelInfo.payPerson.givenName;
	Travel.PayerPhone = travelInfo.payPerson.telephone;
	Travel.PayerEmailNA = !travelInfo.payPerson.email;
	Travel.PayerEmail = travelInfo.payPerson.email;
	Travel.PayerRelationship = travelInfo.payPerson.relationship;
	Travel.PayerAddrSameAsInd = travelInfo.payPerson.sameAddrees;
	if(!Travel.PayerAddrSameAsInd){
		Travel.PayerStreetAddress1 = travelInfo.payPerson.address.street;
		Travel.PayerCountry = travelInfo.payPerson.address.country;
		Travel.PayerStateProvinceNA = !travelInfo.payPerson.address.province;
		if(!Travel.PayerStateProvinceNA){
			Travel.PayerStateProvince = travelInfo.payPerson.address.province;
		}
		Travel.PayerCity = travelInfo.payPerson.address.city;
		Travel.PayerPostalZIPCodeNA = !travelInfo.payPerson.address.postCode;
		if(!Travel.PayerPostalZIPCodeNA){
			Travel.PayerPostalZIPCode = travelInfo.payPerson.address.postCode;
		}
	}

	return Travel;
}

function transTravelCompanions(data){
	var TravelCompanions = {};

	var companionInfo = data.companionInfo;

	TravelCompanions.HasOtherPersons = companionInfo.haveCompanion;
	if(TravelCompanions.HasOtherPersons){
		TravelCompanions.IsGroupTravel = companionInfo.asPartOfGroup;
		if(TravelCompanions.IsGroupTravel){

		}else{
			TravelCompanions.Persons = companionInfo.companions.map(function(companion){
				return {
					Surname: companion.surnName,
					GivenName: companion.givenName,
					Relationship: companion.relationship
				};
			});
		}
	}

	return TravelCompanions;
}

function transPreviousUSTravel(data){
	var PreviousUSTravel = {};

	var previousTravelInfo = data.previousTravelInfo;

	return PreviousUSTravel;
}

module.exports = function(data){
	var ViewModule = {};

	Object.assign(ViewModule, transPersonal(data));
	ViewModule.AddressPhone = transAddressPhone(data);
	ViewModule.Passport = transPassport(data);
	ViewModule.Travel = transTravel(data);
	ViewModule.TravelCompanions = transTravelCompanions(data);
	ViewModule.PreviousUSTravel = transPreviousUSTravel(data);
};