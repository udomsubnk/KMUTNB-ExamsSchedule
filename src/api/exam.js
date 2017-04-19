exports.findDataExam = function(id){
	for(var i=0;i<exam.length;i++){
		if(exam[i].code == id){
			return exam[i]
		}
	}
}
export var exam = [
	{
		"code":"040113005",
		"exam":{
			"mid":{
				"day":"T",
				"date":"7",
				"month":"3",
				"year":"2017",
				"timeStart":"9:00",
				"timeEnd":"12:00"
			},
			"final":{
				"day":"M",
				"date":"15",
				"month":"5",
				"year":"2017",
				"timeStart":"9:00",
				"timeEnd":"12:00"
			}
		}
	},{"code":"040203101","exam":{"mid":{"day":"M","date":"6","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"M","date":"22","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040203102","exam":{"mid":{"day":"M","date":"6","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"M","date":"22","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040203201","exam":{"mid":{"day":"T","date":"7","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"M","date":"22","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040203202","exam":{"mid":{"day":"M","date":"6","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"M","date":"22","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040313016","exam":{"mid":{"day":"F","date":"10","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"T","date":"23","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040413001","exam":{"mid":{"day":"T","date":"7","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"F","date":"19","month":"5","year":"2017","timeStart":"16:30","timeEnd":"19:30"}}},{"code":"040433002","exam":{"mid":{"day":"T","date":"7","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"F","date":"26","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040503011","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"F","date":"26","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040613121","exam":{"mid":{"day":"S","date":"11","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"W","date":"24","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613182","exam":{"mid":{"day":"F","date":"10","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"F","date":"19","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040613191","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"M","date":"15","month":"5","year":"2017","timeStart":"16:30","timeEnd":"19:30"}}},{"code":"040613241","exam":{"mid":{"day":"H","date":"9","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"F","date":"19","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613272","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"W","date":"17","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613292","exam":{"mid":{"day":"S","date":"11","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"H","date":"25","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613325","exam":{"mid":{"day":"F","date":"10","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"W","date":"17","month":"5","year":"2017","timeStart":"16:30","timeEnd":"19:30"}}},{"code":"040613348","exam":{"mid":{"day":"M","date":"6","month":"3","year":"2017","timeStart":"16:30","timeEnd":"19:30"},"final":{"day":"F","date":"26","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613349","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"T","date":"23","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613354","exam":{"mid":{"day":"S","date":"11","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"M","date":"22","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040613374","exam":{"mid":{"day":"T","date":"7","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"W","date":"24","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040613393","exam":{"mid":{"day":"H","date":"9","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"M","date":"15","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613400","exam":{"mid":{},"final":{}}},{"code":"040613404","exam":{"mid":{},"final":{}}},{"code":"040613405","exam":{"mid":{},"final":{}}},{"code":"040613407","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"16:30","timeEnd":"19:30"},"final":{"day":"F","date":"19","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613408","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"16:30","timeEnd":"19:30"},"final":{"day":"F","date":"19","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"040613424","exam":{"mid":{"day":"S","date":"11","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"H","date":"25","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"040613457","exam":{"mid":{"day":"F","date":"10","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"T","date":"16","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"080103002","exam":{"mid":{"day":"H","date":"9","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"W","date":"17","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"080103011","exam":{"mid":{"day":"F","date":"10","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"W","date":"17","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"080103012","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"W","date":"17","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"080103014","exam":{"mid":{"day":"W","date":"8","month":"3","year":"2017","timeStart":"9:00","timeEnd":"12:00"},"final":{"day":"F","date":"19","month":"5","year":"2017","timeStart":"16:30","timeEnd":"19:30"}}},{"code":"080103016","exam":{"mid":{},"final":{}}},{"code":"080203901","exam":{"mid":{"day":"T","date":"7","month":"3","year":"2017","timeStart":"13:00","timeEnd":"15:00"},"final":{"day":"T","date":"16","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"080203904","exam":{"mid":{"day":"H","date":"9","month":"3","year":"2017","timeStart":"13:00","timeEnd":"15:00"},"final":{"day":"H","date":"18","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"080203905","exam":{"mid":{"day":"T","date":"7","month":"3","year":"2017","timeStart":"13:00","timeEnd":"15:00"},"final":{"day":"F","date":"19","month":"5","year":"2017","timeStart":"13:00","timeEnd":"16:00"}}},{"code":"080303501","exam":{"mid":{},"final":{"day":"H","date":"18","month":"5","year":"2017","timeStart":"13:00","timeEnd":"14:00"}}},{"code":"080303503","exam":{"mid":{},"final":{"day":"H","date":"18","month":"5","year":"2017","timeStart":"13:00","timeEnd":"14:00"}}},{"code":"080303504","exam":{"mid":{},"final":{"day":"H","date":"18","month":"5","year":"2017","timeStart":"13:00","timeEnd":"14:00"}}},{"code":"080303505","exam":{"mid":{},"final":{}}},{"code":"080303601","exam":{"mid":{"day":"M","date":"6","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"H","date":"18","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}},{"code":"080303606","exam":{"mid":{"day":"M","date":"6","month":"3","year":"2017","timeStart":"13:00","timeEnd":"16:00"},"final":{"day":"H","date":"18","month":"5","year":"2017","timeStart":"9:00","timeEnd":"12:00"}}}
]