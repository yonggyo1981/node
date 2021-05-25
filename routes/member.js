const express = require('express');
const router = express.Router();
const member = require("../models/member"); // member Model 
const { joinValidator } = require('../middlewares/join_validator'); // 회원 가입 유효성 검사

router.route("/join")
		/** 회원 가입 양식 */
		.get((req, res, next) => {
			res.render("member/form");
		})
		/** 회원 가입 처리 */
		.post(joinValidator, (req, res, next) => {
			console.log(req.body);
			res.send("");
		});

module.exports = router;