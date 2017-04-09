module.exports = function(data){
	var Sign = {};
	var passportInfo = data.passportInfo;
    Sign.PassportNum=passportInfo.passportNum;
    return {
        Sign:Sign
    }
}