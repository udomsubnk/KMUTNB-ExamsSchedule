import { findSectionFromSection_id } from './section'
exports.chooseCourse = function(coursesSelect,pageTwo){
	let { kana,laksoot,prapet,year,sec,rob } = coursesSelect
	let url = `/callcourse/${kana}/${laksoot}/${prapet}/${year}/R/${sec}`
	fetch(url)
	.then((res)=>
	    res.json()
	).then((res)=>{
		let courses = res.allCourse.map((courseId) => findSectionFromSection_id(courseId))
		console.log(coursesSelect)
	    pageTwo(courses,coursesSelect)
	})
}