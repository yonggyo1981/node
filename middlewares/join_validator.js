/**
* 회원 가입 유효성 검사 
*/

module.exports.joinValidator = (req, res, next) => {
	// req.body.memId, req.body.memPw
	if (!req.body.memId) {
		
	}
	
	if (!req.body.memPw) {
		
	}
	
	next(); // 다음 미들웨어로 이동
};