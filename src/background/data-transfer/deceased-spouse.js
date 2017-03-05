module.exports = function(data){
	var DeceasedSpouse = {};

	var deseasedSpouseInfo = data.deseasedSpouseInfo;

	if(deseasedSpouseInfo){
		DeceasedSpouse.Surname = deseasedSpouseInfo.peopleName.surnName;
		DeceasedSpouse.GivenName = deseasedSpouseInfo.peopleName.givenName;
		DeceasedSpouse.Birth = deseasedSpouseInfo.birth.birthDate;
		DeceasedSpouse.Nationality = deseasedSpouseInfo.spouseNationality;
		DeceasedSpouse.CityUnknow = !deseasedSpouseInfo.birth.city;
		if(!DeceasedSpouse.CityUnknow){
			DeceasedSpouse.City = deseasedSpouseInfo.birth.city;
		}
		DeceasedSpouse.Country = deseasedSpouseInfo.birth.country;
	}

	return {
		DeceasedSpouse: DeceasedSpouse
	};
}