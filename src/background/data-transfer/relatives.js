module.exports = function(data){
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
	
	Relatives.HasImmediateRelatives = familyInfo.haveImmediateRelative;
	if(Relatives.HasImmediateRelatives){
		Relatives.ImmediateRelatives = familyInfo.relatives.map(function(relative){
			return {
				Surname: relative.surnName,
				GivenName: relative.givenName,
				Relationship: relative.relationWithYou,
				RelativesStatus: ""
			};
		});
	}else{
		Relatives.HasOtherRelatives = familyInfo.haveOtherRelative;
	}

	return {
		Relatives: Relatives
	};
}