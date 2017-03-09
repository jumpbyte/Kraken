module.exports = function(data){
	var SecureQuestion = {};

	var question = data.question;

	SecureQuestion.Questions = question.option;
	SecureQuestion.Answer = question.answer;

	return {
		SecureQuestion: SecureQuestion
	};
}