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
	return {
		SecurityandBackground1: transSecurityandBackground1(data),
		SecurityandBackground2: transSecurityandBackground2(data),
		SecurityandBackground3: transSecurityandBackground3(data),
		SecurityandBackground4: transSecurityandBackground4(data),
		SecurityandBackground5: transSecurityandBackground5(data)
	};
}