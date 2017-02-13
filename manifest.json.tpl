{
	"name": "Kraken",
	"version": "0.1",
	"manifest_version": 2,
	"description": "签证信息自动填写",
	"permissions": ["contextMenus"],
	"icons": {
		"16": "images/icon-16.png",
		"48": "images/icon-48.png"
	},
	"browser_action": {
		"default_icon": "images/icon-32.png",
		"default_title": "Kraken"
	},
	"background": {
		"scripts": ["background.js"]
	},
	"content_scripts": [
		{
			"matches": ["https://ceac.state.gov/genniv/default.aspx", "https://ceac.state.gov/GenNIV/Default.aspx", "https://ceac.state.gov/GenNIV/default.aspx"],
			"js": ["home.js"]
		}, {
			"matches": ["https://ceac.state.gov/GenNIV/Common/ConfirmApplicationID.aspx?node=SecureQuestion"],
			"js": ["secure-question.js"]
		}, {
			"matches": ["https://ceac.state.gov/GenNIV/General/complete/complete_personal.aspx?node=Personal1"],
			"js": ["personal1.js"]
		}, {
			"matches": ["https://ceac.state.gov/GenNIV/General/complete/complete_personalcont.aspx?node=Personal2"],
			"js": ["personal2.js"]
		}, {
			"matches": ["https://ceac.state.gov/GenNIV/General/complete/complete_contact.aspx?node=AddressPhone"],
			"js": ["address-phone.js"]
		}, {
			"matches": ["https://ceac.state.gov/GenNIV/General/complete/Passport_Visa_Info.aspx?node=PptVisa"],
			"js": ["passport.js"]
		}, {
			"matches": ["https://ceac.state.gov/GenNIV/General/complete/complete_travel.aspx?node=Travel"],
			"js": ["travel.js"]
		}
	]
}
