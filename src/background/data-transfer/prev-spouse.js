module.exports = function(data){
	var PrevSpouse = {};

	var formerSpouseInfos = data.formerSpouseInfos;

	PrevSpouse.NumberOfPrevSpouses = formerSpouseInfos.length;
	PrevSpouse.PrevSpouses = formerSpouseInfos.map(function(info){
		return {
			Surname: info.peopleName.surnName,
			GivenName: info.peopleName.givenName,
			Birth: info.birth.birthDate,
			Nationality: info.spouseNationality,
			City: info.birth.city,
			CityUnknow: !info.birth.city,
			Country: info.birth.country,
			MarriageDate: info.marriageDate,
			MarriageEndedDate: info.marriageDateEnd,
			MarriageEndedExplain: info.marriageEndExplain,
			MarriageEndedCountry: info.terminatedCountry
		};
	});

	return PrevSpouse;
}