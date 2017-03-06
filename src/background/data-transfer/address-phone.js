module.exports = function(data){
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

	return {
		AddressPhone: AddressPhone
	};
}