let actual_ans = JSON.parse(localStorage.getItem('Actual_answer'));
let user_ans = JSON.parse(localStorage.getItem('User_answer'));
console.log(actual_ans);
console.log(user_ans);  
let correct_ans = 0;
let wrong_ans = 0;
let unattempt = 0;
let x = 0;
let user_lang = user_ans.language;
for(let j=0;j<actual_ans.length;j++){
	if(actual_ans[j].language == user_lang){
		x = j;
		break;
	}
}
for(let i=0;i<user_ans.answer.length;i++){
	let user = user_ans.answer[i];
	let actual = actual_ans[x].answer[i];
	if(user == "15"){
		unattempt = unattempt + 1;
	}
	else if(user == actual){
		correct_ans = correct_ans + 1;
	}
	else{
		wrong_ans = wrong_ans + 1;
	}
}
console.log("unattempt = "+ unattempt);
console.log("wrong_ans = "+ wrong_ans);
console.log("correct_ans = "+correct_ans);
document.getElementById("choose_lang").innerHTML = "Quiz Result - <i>"+user_lang+"</i>";
document.getElementById("right").innerHTML = "Right Attended Questions : "+correct_ans;
document.getElementById("wrong").innerHTML = "Wrong Attended Questions : "+wrong_ans;
document.getElementById("unatt").innerHTML = "Unattended Questions	   : "+unattempt;

