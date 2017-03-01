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

	PreviousUSTravel.HasPrevUSTravel = previousTravelInfo.haveStayed;
	if(PreviousUSTravel.HasPrevUSTravel){
		PreviousUSTravel.Travels = previousTravelInfo.visitList.map(function(travelInfo){
			return {
				ArrivedDate: travelInfo.arrivedDate,
				StayLength: travelInfo.stayTime,
				StayLengthCD: travelInfo.stayUnit
			};
		});
	}
	PreviousUSTravel.HasUSDriverLicense = previousTravelInfo.holdDirverLicense;
	if(PreviousUSTravel.HasUSDriverLicense){
		PreviousUSTravel.DriverLicenses = previousTravelInfo.dirverList.map(function(dirver){
			return {
				LicenseNum: dirver.licenseNum,
				LicenseNumUnknow: dirver.notKnow,
				LicenseState: dirver.state
			};
		});
	}
	PreviousUSTravel.HasPrevVisa = previousTravelInfo.haveVisaBefore;
	PreviousUSTravel.PrevVisaIssuedDate = previousTravelInfo.previous.lastIssuedDate;
	PreviousUSTravel.VisaNum = previousTravelInfo.previous.visaNumber;
	PreviousUSTravel.VisaNumNA = previousTravelInfo.previous.notKnow;
	PreviousUSTravel.IsPrevVisaSameType = previousTravelInfo.previous.applySameVisa;
	PreviousUSTravel.IsPrevVisaSameCountry = previousTravelInfo.previous.sameIssuePlace;
	PreviousUSTravel.IsPrevVisaTenPrint = previousTravelInfo.previous.haveFingerprint;
	PreviousUSTravel.IsPrevVisaLost = previousTravelInfo.previous.haveLostBefore;
	PreviousUSTravel.PrevVisaLostYear = previousTravelInfo.previous.lostYear;
	PreviousUSTravel.PrevVisaLostExplain = previousTravelInfo.previous.lostExplain;
	PreviousUSTravel.IsPrevVisaCancelled = previousTravelInfo.previous.cancelledOrRevoked;
	PreviousUSTravel.PrevVisaCancelExplain = previousTravelInfo.previous.cancelExplain;
	PreviousUSTravel.IsPrevVisaRefused = previousTravelInfo.refusedBefore;
	PreviousUSTravel.PrevVisaRefusedExplain = previousTravelInfo.refusedExplain;
	PreviousUSTravel.IsIVPetition = previousTravelInfo.filedImmigrantBefore;
	PreviousUSTravel.IVPetitionExplain = previousTravelInfo.filedExplain;

	return PreviousUSTravel;
}

function transUSContact(data){
	var USContact = {};

	var contactInfo = data.contactInfo;

	USContact.Surname = contactInfo.surnName;
	USContact.GivenName = contactInfo.givenName;
	USContact.NameNA = contactInfo.notKnowPerson;
	// USContact.Organization = contactInfo.Organization;
	USContact.OrganizationNA = contactInfo.notKnowOrganization;
	USContact.Relationship = contactInfo.relationship;
	USContact.Address1 = contactInfo.street;
	USContact.City = contactInfo.city;
	USContact.State = contactInfo.state;
	USContact.ZipCode = contactInfo.zipCode;
	USContact.PhoneNum = contactInfo.phoneNumber;
	USContact.Email = contactInfo.email;
	USContact.EmailNA = contactInfo.notApplyEmail;


	return USContact;
}

function transRelatives(data){
	var Relatives = {};

	var familyInfo = data.familyInfo;

	Relatives.FathersSurnameUnknow = !familyInfo.father.surnName;
	if(!Relatives.FathersSurnameUnknow){
		Relatives.FathersSurname = familyInfo.father.surnName;
	}
	Relatives.FathersGivenNameUnknow = !familyInfo.father.givenName;
	if(!Relatives.FathersGivenNameUnknow){
		Relatives.FathersGivenName = familyInfo.father.givenName;
	}
	Relatives.FathersBirthUnknow = !familyInfo.father.birthDate;
	if(!Relatives.FathersBirthUnknow){
		Relatives.FathersBirth = familyInfo.father.birthDate;
	}
	Relatives.IsFatherLiveInUS = familyInfo.father.inUS;
	//Relatives.FathersStatus = familyInfo.father.
	Relatives.MothersSurnameUnknow = !familyInfo.mother.surnName;
	if(!Relatives.MothersSurnameUnknow){
		Relatives.MothersSurname = familyInfo.mother.surnName;
	}
	Relatives.MothersGivenNameUnknow = !familyInfo.mother.givenName;
	if(!Relatives.MothersGivenNameUnknow){
		Relatives.MothersGivenName = familyInfo.mother.givenName;
	}
	Relatives.MothersBirthUnknow = !familyInfo.mother.birthDate;
	if(!Relatives.MothersBirthUnknow){
		Relatives.MothersBirth = familyInfo.mother.birthDate;
	}
	Relatives.IsMotherLiveInUS = familyInfo.mother.inUS;
	//Relatives.MothersStatus = familyInfo.mother.
	Relatives.HasOtherRelatives = familyInfo.haveOtherRelative;
	if(Relatives.HasOtherRelatives){
		// Relatives.OtherRelatives = familyInfo.OtherRelatives.map(function(relative){
		// 	return {
		// 		Surname: "",
		// 		GivenName: "",
		// 		Relationship: "",
		// 		RelativesStatus: ""
		// 	};
		// });
	}
	// Relatives.haveImmediateRelative = familyInfo.haveImmediateRelative;

	return Relatives;
}

function transSpouse(data){
	var Spouse = {};

	var spouseInfo = data.spouseInfo;

	Spouse.SpouseSurname = spouseInfo.peopleName.surnName;
	Spouse.SpouseGivenName = spouseInfo.peopleName.givenName;
	Spouse.SpouseBirth = spouseInfo.birth.birthDate;
	Spouse.SpouseNationality = "CHIN";
	Spouse.SpouseCountry = spouseInfo.birth.country;
	Spouse.SpouseCityUnknow = !spouseInfo.birth.city;
	if(!Spouse.SpouseCityUnknow){
		Spouse.SpouseCity = spouseInfo.birth.city;
	}
	Spouse.SpouseAddressType = spouseInfo.addressSelection;
	if(Spouse.SpouseAddressType === "O"){
		Spouse.SpouseAddressLine1 = spouseInfo.address.street;
		Spouse.SpouseAddressCountry = spouseInfo.address.country;
		Spouse.SpouseAddressStateNA = !spouseInfo.address.province;
		if(!Spouse.SpouseAddressStateNA){
			Spouse.SpouseAddressState = spouseInfo.address.province;
		}
		Spouse.SpouseAddressCity = spouseInfo.address.city;
		Spouse.SpouseAddressZipCodeNA = !spouseInfo.address.postCode;
		if(!Spouse.SpouseAddressZipCodeNA){
			Spouse.SpouseAddressZipCode = spouseInfo.address.postCode;
		}
	}

	return Spouse;
}

function transPrevSpouse(data){
	var PrevSpouse = {};

	var formerSpouseInfos = data.formerSpouseInfos;

	PrevSpouse.NumberOfPrevSpouses = formerSpouseInfos.length;
	PrevSpouse.PrevSpouses = formerSpouseInfos.map(function(info){
		return {
			SpouseSurname: info.peopleName.surnName,
			SpouseGivenName: info.peopleName.givenName,
			SpouseBirth: info.birth.birthDate,
			SpouseNationality: info.spouseNationality,
			SpouseCity: info.birth.city,
			SpouseCityUnknow: !info.birth.city,
			SpouseCountry: info.birth.country,
			MarriageDate: info.marriageDate,
			MarriageEndedDate: info.marriageDateEnd,
			MarriageEndedExplain: info.marriageEndExplain,
			MarriageEndedCountry: info.terminatedCountry
		};
	});

	return PrevSpouse;
}

function transWorkEducation1(data){
	var WorkEducation1 = {};

	var wetInfo = data.wetInfo;
	var presentWork = wetInfo.presentWork;
	var schoolUnit = presentWork.schoolUnit;
	var address = schoolUnit.address;

	WorkEducation1.PresentOccupation = wetInfo.primaryOccupation;
	WorkEducation1.ExplainOtherPresentOccupation = wetInfo.explain;
	WorkEducation1.EmpSchName = schoolUnit.name;
	WorkEducation1.EmpSchAddr1 = address.street;
	WorkEducation1.EmpSchCity = address.city;
	WorkEducation1.EmpSchState = address.province;
	WorkEducation1.EmpSchStateNA = !address.isHaveProvince;
	WorkEducation1.EmpSchZipCode = address.postCode;
	WorkEducation1.EmpSchZipCodeNA = !address.isHavePostCode;
	WorkEducation1.PhoneNum = schoolUnit.phoneNumber;
	WorkEducation1.EmpSchCountry = address.country;
	WorkEducation1.CurrMonthlySalary = presentWork.income;
	WorkEducation1.CurrMonthlySalaryNA = presentWork.notHaveIncome;
	WorkEducation1.DescribeDuties = presentWork.duteDescription;

	return WorkEducation1;
}

function transWorkEducation2(data){
	var WorkEducation2 = {};

	var wetInfo = data.wetInfo;
	var previousWork = wetInfo.previousWork;
	WorkEducation2.PreviouslyEmployed = previousWork.employed;
	WorkEducation2.Employers = previousWork.employmentList.map(function(employment){
		var address = employment.address;

		return {
			EmployerName: employment.companyName,
			EmployerStreetAddress1: address.street,
			EmployerCity: address.city,
			EmployerState: address.province,
			EmployerStateNA: !address.isHaveProvince,
			EmployerZipCode: address.postCode,
			EmployerZipCodeNA: !address.isHavePostCode,
			EmployerCountry: address.country,
			EmployerPhone: employment.telephone,
			JobTitle: employment.jobTitle,
			SupervisorSurname: employment.supervisor.surnName,
			SupervisorSurnameNA: !employment.supervisor.surnName,
			SupervisorGivenName: employment.supervisor.givenName,
			SupervisorGivenNameNA: !employment.supervisor.givenName,
			EmployerDateFrom: employment.from,
			EmployerDateTo: employment.to,
			DescribeDuties: employment.duteDescription
		};
	});
	WorkEducation2.OtherEduc = previousWork.attended;
	WorkEducation2.Schools = previousWork.institutionList.map(function(institution){
		var address = institution.address;

		return {
			SchoolName: institution.name,
			SchoolAddr1: address.street,
			SchoolCity: address.city,
			SchoolState: address.province,
			SchoolStateNA: !address.isHaveProvince,
			SchoolZipCode: address.postCode,
			SchoolZipCodeNA: !address.isHavePostCode,
			SchoolCountry: address.country,
			SchoolCourseOfStudy: institution.course,
			SchoolDateFrom: institution.from,
			SchoolDateTo: institution.to
		};
	});

	return WorkEducation2;
}

function transWorkEducation3(data){
	var WorkEducation3 = {};

	var addition = data.addition;

	WorkEducation3.IsBelongClan = addition.belongClanOrTribe;
	WorkEducation3.ClanName = addition.clanOrTribeName;
	WorkEducation3.LanguageNames = addition.languages.map(function(language){
		return {
			LanguageName: language
		};
	});
	WorkEducation3.IsCountrysVisited = addition.traveledInFiveYear;
	WorkEducation3.CountrysVisited = addition.visitedCountry.map(function(country){
		return {
			Country: country
		};
	});
	WorkEducation3.IsBelongOrganization = addition.contributedForOrganization;
	WorkEducation3.OrganizationNames = addition.organizationName.map(function(name){
		return {
			Name: name
		};
	});
	WorkEducation3.HasSpecializedSkills = addition.specializedSkill;
	WorkEducation3.SpecializedSkillExplain = addition.skillExplain;
	WorkEducation3.IsMilitaryService = addition.served;
	WorkEducation3.Militarys = addition.militarys.map(function(military){
		return {
			Country: military.country,
			Branch: military.branch,
			Rank: military.rank,
			Specialty: military.specialty,
			FromDate: military.from,
			ToDate: military.to
		};
	});
	WorkEducation3.IsInsurgent = addition.servedForRebelOrg;
	WorkEducation3.InsurgentExplain = addition.rebelExplain;

	return WorkEducation3;
}

function transSecurityandBackground1(data){
	var SecurityandBackground1 = {};

	var backgroundInfo = data.backgroundInfo;

	SecurityandBackground1.Disease = backgroundInfo.haveDisease;
	SecurityandBackground1.DiseaseExplain = backgroundInfo.diseaseExplain;
	SecurityandBackground1.Disorder = backgroundInfo.haveMental;
	SecurityandBackground1.DisorderExplain = backgroundInfo.mentalExplain;
	SecurityandBackground1.Druguser = backgroundInfo.dragAddict;
	SecurityandBackground1.DruguserExplain = backgroundInfo.dragExplain;

	return SecurityandBackground1;
}

function transSecurityandBackground2(data){
	var SecurityandBackground2 = {};

	var backgroundInfo = data.backgroundInfo;

	SecurityandBackground2.Arrested = backgroundInfo.arrestedBefore;
	SecurityandBackground2.ArrestedExplain = backgroundInfo.arrestedExplain;
	SecurityandBackground2.ControlledSubstances = backgroundInfo.violatedLaw;
	SecurityandBackground2.ControlledSubstancesExplain = backgroundInfo.lawExplain;
	SecurityandBackground2.Prostitution = backgroundInfo.engagedUnlawfulThing;
	SecurityandBackground2.ProstitutionExplain = backgroundInfo.unlawfulThingExplain;
	SecurityandBackground2.MoneyLaundering = backgroundInfo.involvedInlaundering;
	SecurityandBackground2.MoneyLaunderingExplain = backgroundInfo.inlaunderingExplain;
	SecurityandBackground2.HumanTrafficking = backgroundInfo.conspiredHumanTrafficking;
	SecurityandBackground2.HumanTraffickingExplain = backgroundInfo.traffickingExplain;
	SecurityandBackground2.AssistedSevereTrafficking = backgroundInfo.abettedHumanTrafficking;
	SecurityandBackground2.AssistedSevereTraffickingExplain = backgroundInfo.abettedHumanExplain;
	SecurityandBackground2.HumanTraffickingRelated = backgroundInfo.abettedHumanTraffickingInFive;
	SecurityandBackground2.HumanTraffickingRelatedExplain = backgroundInfo.traffickingInFiveExplain;

	return SecurityandBackground2;
}

function transSecurityandBackground3(data){
	var SecurityandBackground3 = {};

	var backgroundInfo = data.backgroundInfo;

	SecurityandBackground3.IllegalActivity = backgroundInfo.engagedInIllegalActivity;
	SecurityandBackground3.IllegalActivityExplain = backgroundInfo.illegalActivityExplain;
	SecurityandBackground3.TerroristActivity = backgroundInfo.engagedTerroristActivity;
	SecurityandBackground3.TerroristActivityExplain = backgroundInfo.terroristExplain;
	SecurityandBackground3.TerroristSupport = backgroundInfo.provideFinancialForTerrorists;
	SecurityandBackground3.TerroristSupportExplain = backgroundInfo.financialExplain;
	SecurityandBackground3.TerroristOrg = backgroundInfo.oneOfTerrorist;
	SecurityandBackground3.TerroristOrgExplain = backgroundInfo.oneOfTerroristExplain;
	SecurityandBackground3.Genocide = backgroundInfo.participatedInGenocide;
	SecurityandBackground3.GenocideExplain = backgroundInfo.genocideExplain;
	SecurityandBackground3.Torture = backgroundInfo.participatedorture;
	SecurityandBackground3.TortureExplain = backgroundInfo.participatedortureExplain;
	SecurityandBackground3.ExViolence = backgroundInfo.participatedKilling;
	SecurityandBackground3.ExViolenceExplain = backgroundInfo.killingExplain;
	SecurityandBackground3.ChildSoldier = backgroundInfo.engagedInRecruitment;
	SecurityandBackground3.ChildSoldierExplain = backgroundInfo.recruitmentExplain;
	SecurityandBackground3.ReligiousFreedom = backgroundInfo.carriedOutFreedom;
	SecurityandBackground3.ReligiousFreedomExplain = backgroundInfo.freedomExplain;
	SecurityandBackground3.PopulationControls = backgroundInfo.involvedInAbortion;
	SecurityandBackground3.PopulationControlsExplain = backgroundInfo.abortionExplain;
	SecurityandBackground3.Transplant = backgroundInfo.involvedInTransplantation;
	SecurityandBackground3.TransplantExplain = backgroundInfo.transplantationExplain;

	return SecurityandBackground3;
}

function transSecurityandBackground4(data){
	var SecurityandBackground4 = {};

	var backgroundInfo = data.backgroundInfo;

	SecurityandBackground4.RemovalHearing = backgroundInfo.transferredToHearing;
	SecurityandBackground4.RemovalHearingExplain = backgroundInfo.hearingExplain;
	SecurityandBackground4.ImmigrationFraud = backgroundInfo.immigrationFraud;
	SecurityandBackground4.ImmigrationFraudExplain = backgroundInfo.immigrationExplain;
	SecurityandBackground4.FailToAttend = backgroundInfo.unableToHearingInFive;
	SecurityandBackground4.FailToAttendExplain = backgroundInfo.unableToHearingExplain;
	SecurityandBackground4.VisaViolation = backgroundInfo.unlawfulPresence;
	SecurityandBackground4.VisaViolationExplain = backgroundInfo.unlawfulPresenceExplain;

	return SecurityandBackground4;
}

function transSecurityandBackground5(data){
	var SecurityandBackground5 = {};

	var backgroundInfo = data.backgroundInfo;

	SecurityandBackground5.ChildCustody = backgroundInfo.withheldChildCustody;
	SecurityandBackground5.ChildCustodyExplain = backgroundInfo.childCustodyExplain;
	SecurityandBackground5.VotingViolation = backgroundInfo.votedViolation;
	SecurityandBackground5.VotingViolationExplain = backgroundInfo.votedViolationExplain;
	SecurityandBackground5.RenounceExp = backgroundInfo.avoidedTaxation;
	SecurityandBackground5.RenounceExpExplain = backgroundInfo.avoidedTaxationExplain;
	SecurityandBackground5.AttWoReimb = backgroundInfo.notPayForSchool;
	SecurityandBackground5AttWoReimbExplain = backgroundInfo.notPayForSchoolExplain;

	return SecurityandBackground5;
}

module.exports = function(data){
	var ViewModule = {};

	Object.assign(ViewModule, transPersonal(data));
	ViewModule.AddressPhone = transAddressPhone(data);
	ViewModule.Passport = transPassport(data);
	ViewModule.Travel = transTravel(data);
	ViewModule.TravelCompanions = transTravelCompanions(data);
	ViewModule.PreviousUSTravel = transPreviousUSTravel(data);
	ViewModule.USContact = transUSContact(data);
	ViewModule.Relatives = transRelatives(data);
	ViewModule.Spouse = transSpouse(data);
	ViewModule.PrevSpouse = transPrevSpouse(data);
	ViewModule.WorkEducation1 = transWorkEducation1(data);
	ViewModule.WorkEducation2 = transWorkEducation2(data);
	ViewModule.WorkEducation3 = transWorkEducation3(data);
	ViewModule.SecurityandBackground1 = transSecurityandBackground1(data);
	ViewModule.SecurityandBackground2 = transSecurityandBackground2(data);
	ViewModule.SecurityandBackground3 = transSecurityandBackground3(data);
	ViewModule.SecurityandBackground4 = transSecurityandBackground4(data);
	ViewModule.SecurityandBackground5 = transSecurityandBackground5(data);
};