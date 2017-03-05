module.exports = function(data){
	var Passport = {};

	var passportInfo = data.passportInfo;

	Passport.Type = passportInfo.type;
	Passport.Number = passportInfo.passportNum;
	Passport.BookNumberNA = !passportInfo.passportBookNum;
	if(!Passport.BookNumberNA){
		Passport.BookNumber = passportInfo.passportBookNum;
	}
	Passport.Country = passportInfo.country;
	Passport.IssuedCountry = passportInfo.issuedCountry;
	Passport.IssuedState = passportInfo.issuedProvince;
	Passport.IssuedCity = passportInfo.issuedCity;
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

	return {
		Passport: Passport
	};
}