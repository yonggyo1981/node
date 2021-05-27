const { sequelize, Sequelize : { QueryTypes } } = require('./index');
/**
* 이력서 Model
*
*/
const resume = {
	/**
	* 이력서 저장 
	*
	* @param Object params - req.body
	* @return Boolean 
	*/
	update : async function(params) {
		console.log(params);
		try {
			// basicinfo 처리  S 
			
			/** 취업우대 • 병역 선택 체크 S */
			if (!params.items || params.items.indexOf("병역") == -1) {  // 취업우대,병역 항목 선택이 없으면 값 비우기
				params.military = params.handicapLevel = params.benefit = "";	
			}
			/** 취업우대 • 병역 선택 체크 E */
			
			if (params.benefit instanceof Array) {
				params.benefit = params.benefit.join("||");
			}
			
			let sql = `UPDATE basicinfo 
									SET 
										  resumeTitle = :resumeTitle, 
										  name = :name,
										  birthDate = :birthDate,
										  landline = :landline,
										  cellPhone = :cellPhone,
										  gender = :gender,
										  email = :email,
										  address = :address,
										  workType = :workType,
										  salary = :salary,
										  workLocation = :workLocation,
										  workKeyword = :workKeyword,
										  benefit = :benefit,
										  handicapLevel = :handicapLevel,
										  military = :military,
										  negotiableSalary = :negotiableSalary`;
				let replacements = {
					resumeTitle : params.resumeTitle,
					name : params.name,
					birthDate : params.birthDate,
					landline : params.landline,
					cellPhone : params.cellPhone,
					gender : params.gender,
					email : params.email,
					address : params.address,
					workType : params.workType,
					salary : params.salary,
					workLocation : params.workLocation,
					workKeyword : params.workKeyword,
					benefit : params.benefit || "",
					handicapLevel : params.handicapLevel,
					military : params.military,
					negotiableSalary : params.negotiableSalary || 0,
				};
				
				let result = await sequelize.query(sql, {
					replacements, 
					type : QueryTypes.INSERT,
				});
			// basicinfo 처리 E 
			// school 학력 처리 S 
			sql = 'TRUNCATE school';
			result = await sequelize.query(sql, {
				type : QueryTypes.DELETE,
			});
			console.log(result);
			if (params.items && params.items.indexOf('학력') != -1) {
				
			}
			// school 학력 처리 E 
			
			
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
};

module.exports = resume;