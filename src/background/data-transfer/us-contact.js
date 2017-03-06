module.exports = function(data){
	var USContact = {};

	var contactInfo = data.contactInfo;

	USContact.Surname = contactInfo.surnName;
	USContact.GivenName = contactInfo.givenName;
	USContact.NameNA = contactInfo.notKnowPerson;
	USContact.Organization = contactInfo.organizationName;
	USContact.OrganizationNA = !contactInfo.organizationName;
	USContact.Relationship = contactInfo.relationship;
	USContact.Address1 = contactInfo.street;
	USContact.City = contactInfo.city;
	USContact.State = contactInfo.state;
	USContact.ZipCode = contactInfo.zipCode;
	USContact.PhoneNum = contactInfo.phoneNumber;
	USContact.Email = contactInfo.email;
	USContact.EmailNA = !contactInfo.email;


	return {
		USContact: USContact
	};
}