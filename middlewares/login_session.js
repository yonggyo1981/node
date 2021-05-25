/**
* 로그인 여부 체크 후 추가 처리 미들웨어 
*
*/

module.exports.loginSession = (req, res, next) => {
	req.isLogin = res.isLogin = res.locals.isLogin = false;
	if (req.session.memId) { // 로그인이 된 경우 
		req.isLogin = res.isLogin = res.locals.isLogin = true;
	}
	
	next();
};