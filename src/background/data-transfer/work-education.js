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

	var wetInfo = data.wetInfo;
	var addition = wetInfo.addition;

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

module.exports = function(data){
	return {
		WorkEducation1: transWorkEducation1(data),
		WorkEducation2: transWorkEducation2(data),
		WorkEducation3: transWorkEducation3(data)
	};
}