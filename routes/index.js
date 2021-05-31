const express = require('express');
const router = express.Router();

/** 이력서 프론트 메인 */
router.get("/", (req, res, next) => {
	res.render("main");
});

module.exports = router;