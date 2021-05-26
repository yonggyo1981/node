/**
* 파일 업로드 라우터 
*
*/
const express = require('express');
const multer = require('multer');
const fs = require('fs').promises;

const router = express.Router();

const upload = multer({
		storage : multer.diskStorage({
			// 파일이 저장될 경로
			destination : (req, file, done) => {
				done(null, "public/profile/");
			},
			// 저장할 파일명 설정
			filename : (req, file, done) => {
				// 파일 1개만 업로드 
				done(null, "profile");
			},
		}),
		limits : { fileSize : 10 * 1024 * 1024 }, // 10mb
});

router.route("/")
		.get((req, res, next) => {
			
		})
		.post(upload.single("file"), (req, res, next) => {
			
		});

module.exports = router;