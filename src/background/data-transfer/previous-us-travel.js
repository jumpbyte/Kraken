module.exports = function(data){
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
	}

	PreviousUSTravel.HasPrevVisa = previousTravelInfo.haveVisaBefore;
	if(PreviousUSTravel.HasPrevVisa){
		PreviousUSTravel.PrevVisaIssuedDate = previousTravelInfo.previous.lastIssuedDate;
		PreviousUSTravel.VisaNum = previousTravelInfo.previous.visaNumber;
		PreviousUSTravel.VisaNumNA = previousTravelInfo.previous.notKnow;
		PreviousUSTravel.IsPrevVisaSameType = previousTravelInfo.previous.applySameVisa;
		PreviousUSTravel.IsPrevVisaSameCountry = previousTravelInfo.previous.sameIssuePlace;
		PreviousUSTravel.IsPrevVisaTenPrint = previousTravelInfo.previous.haveFingerprint;

		PreviousUSTravel.IsPrevVisaLost = previousTravelInfo.previous.haveLostBefore;
		if(PreviousUSTravel.IsPrevVisaLost){
			PreviousUSTravel.PrevVisaLostYear = previousTravelInfo.previous.lostYear;
			PreviousUSTravel.PrevVisaLostExplain = previousTravelInfo.previous.lostExplain;
		}

		PreviousUSTravel.IsPrevVisaCancelled = previousTravelInfo.previous.cancelledOrRevoked;
		if(PreviousUSTravel.IsPrevVisaCancelled){
			PreviousUSTravel.PrevVisaCancelExplain = previousTravelInfo.previous.cancelExplain;
		}
	}

	PreviousUSTravel.IsPrevVisaRefused = previousTravelInfo.refusedBefore;
	if(PreviousUSTravel.IsPrevVisaRefused){
		PreviousUSTravel.PrevVisaRefusedExplain = previousTravelInfo.refusedExplain;
	}

	PreviousUSTravel.IsIVPetition = previousTravelInfo.filedImmigrantBefore;
	if(PreviousUSTravel.IsIVPetition){
		PreviousUSTravel.IVPetitionExplain = previousTravelInfo.filedExplain;
	}

	return {
		PreviousUSTravel: PreviousUSTravel
	};
}