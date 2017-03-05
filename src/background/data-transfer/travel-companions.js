module.exports = function(data){
	var TravelCompanions = {};

	var companionInfo = data.companionInfo;

	TravelCompanions.HasOtherPersons = companionInfo.haveCompanion;
	if(TravelCompanions.HasOtherPersons){
		TravelCompanions.IsGroupTravel = companionInfo.asPartOfGroup;
		if(TravelCompanions.IsGroupTravel){
			TravelCompanions.GroupName = companionInfo.groupName;
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

	return {
		TravelCompanions: TravelCompanions
	};
}