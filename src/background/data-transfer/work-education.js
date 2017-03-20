var splitAddress = require("lib/split-address");

function transWorkEducation1(wetInfo){
	var WorkEducation1 = {};

	var presentWork = wetInfo.presentWork || {};
	var schoolUnit = presentWork.schoolUnit || {};
	var address = schoolUnit.address || {};

	WorkEducation1.PresentOccupation = wetInfo.primaryOccupation;
	if(WorkEducation1.PresentOccupation==="N"){
		WorkEducation1.ExplainOtherPresentOccupation = wetInfo.explain;
	}else if(WorkEducation1.PresentOccupation==="O"){
		WorkEducation1.ExplainOtherPresentOccupation = wetInfo.other;
	}
	WorkEducation1.EmpSchName = schoolUnit.name;
	// WorkEducation1.EmpSchAddr1 = address.street;
	splitAddress(address.street, WorkEducation1, ["EmpSchAddr1", "EmpSchAddr2"]);
	WorkEducation1.EmpSchCity = address.city;
	WorkEducation1.EmpSchState = address.province;
	WorkEducation1.EmpSchStateNA = !address.province;
	WorkEducation1.EmpSchZipCode = address.postCode;
	WorkEducation1.EmpSchZipCodeNA = !address.postCode;
	WorkEducation1.PhoneNum = schoolUnit.phoneNumber;
	WorkEducation1.EmpSchCountry = address.country;
	WorkEducation1.CurrMonthlySalary = presentWork.income;
	WorkEducation1.CurrMonthlySalaryNA = !presentWork.income;
	WorkEducation1.DescribeDuties = presentWork.duteDescription;

	return WorkEducation1;
}

function transWorkEducation2(wetInfo){
	var WorkEducation2 = {};

	var previousWork = wetInfo.previousWork || {};
	WorkEducation2.PreviouslyEmployed = wetInfo.haveWorkBefore;
	if(WorkEducation2.PreviouslyEmployed){
		WorkEducation2.Employers = previousWork.employmentList.map(function(employment){
			var address = employment.address || {};

			var item = {
				EmployerName: employment.companyName,
				// EmployerStreetAddress1: address.street,
				EmployerCity: address.city,
				EmployerState: address.province,
				EmployerStateNA: !address.province,
				EmployerZipCode: address.postCode,
				EmployerZipCodeNA: !address.postCode,
				EmployerCountry: address.country,
				EmployerPhone: employment.telephone,
				JobTitle: employment.jobTitle,
				SupervisorSurname: employment.supervisor.surnName,
				SupervisorSurnameNA: !employment.supervisor.surnName,
				SupervisorSurnameNAVal:!employment.supervisor.surnName?"Y":"N",
				SupervisorGivenName: employment.supervisor.givenName||'',
				SupervisorGivenNameNA: !employment.supervisor.givenName,
				SupervisorGivenNameNAVal:!employment.supervisor.givenName?"Y":"N",
				EmployerDateFrom: employment.from,
				EmployerDateTo: employment.to,
				DescribeDuties: employment.duteDescription
			};

			splitAddress(address.street, item, ["EmployerStreetAddress1", "EmployerStreetAddress2"]);

			return item;
		});
	}

	WorkEducation2.OtherEduc = previousWork.haveAttendSchool;
	if(WorkEducation2.OtherEduc){
		WorkEducation2.Schools = previousWork.institutionList.map(function(institution){
			var address = institution.address;

			var item = {
				SchoolName: institution.name,
				// SchoolAddr1: address.street,
				SchoolCity: address.city,
				SchoolState: address.province,
				SchoolStateNA: !address.province,
				SchoolZipCode: address.postCode,
				SchoolZipCodeNA: !address.postCode,
				SchoolCountry: address.country,
				SchoolCourseOfStudy: institution.course,
				SchoolDateFrom: institution.from,
				SchoolDateTo: institution.to
			};

			splitAddress(address.street, item, ["SchoolAddr1", "SchoolAddr2"]);

			return item;
		});
	}

	return WorkEducation2;
}

function transWorkEducation3(wetInfo){
	var WorkEducation3 = {};

	var addition = wetInfo.addition;

	WorkEducation3.IsBelongClan = addition.belongClanOrTribe;
	WorkEducation3.ClanName = addition.clanOrTribeName;
	WorkEducation3.LanguageNames = addition.languages.map(function(language){
		return {
			LanguageName: language
		};
	});

	WorkEducation3.IsCountrysVisited = addition.traveledInFiveYear;
	if(WorkEducation3.IsCountrysVisited){
		WorkEducation3.CountrysVisited = addition.visitedCountry.map(function(country){
			return {
				Country: country
			};
		});
	}

	WorkEducation3.IsBelongOrganization = addition.contributedForOrganization;
	if(WorkEducation3.IsBelongOrganization){
		WorkEducation3.OrganizationNames = addition.organizationName.map(function(name){
			return {
				Name: name
			};
		});
	}

	WorkEducation3.HasSpecializedSkills = addition.specializedSkill;
	WorkEducation3.SpecializedSkillExplain = addition.skillExplain;

	WorkEducation3.IsMilitaryService = addition.served;
	if(WorkEducation3.IsMilitaryService){
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
	}
	
	WorkEducation3.IsInsurgent = addition.servedForRebelOrg;
	WorkEducation3.InsurgentExplain = addition.rebelExplain;

	return WorkEducation3;
}

module.exports = function(data){
	return data.wetInfo ? {
		WorkEducation1: transWorkEducation1(data.wetInfo),
		WorkEducation2: transWorkEducation2(data.wetInfo),
		WorkEducation3: transWorkEducation3(data.wetInfo)
	} : {};
}