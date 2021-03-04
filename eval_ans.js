function checked_val(x){
	var val1 = "15";
	for(var i = 0; i < x.length; i++) { 
        if(x[i].checked){
        	val1 =  x[i].value;
        	break;
    	}
    }
    return val1;
}
function eval_ans() {
	let ans = {
			language : document.getElementById("button_lang").value,
			answer	 : []
		};
	ans.answer.push(checked_val(document.getElementsByName("ques01")));
	ans.answer.push(checked_val(document.getElementsByName("ques02")));
	ans.answer.push(checked_val(document.getElementsByName("ques03")));
	ans.answer.push(checked_val(document.getElementsByName("ques04")));
	ans.answer.push(checked_val(document.getElementsByName("ques05")));
	ans.answer.push(checked_val(document.getElementsByName("ques06")));
	ans.answer.push(checked_val(document.getElementsByName("ques07")));
	ans.answer.push(checked_val(document.getElementsByName("ques08")));
	ans.answer.push(checked_val(document.getElementsByName("ques09")));
	ans.answer.push(checked_val(document.getElementsByName("ques10")));
	localStorage.setItem('User_answer', JSON.stringify(ans));
	window.location.href = "Screen5.html";
    console.log(ans);
}

function next_que(){
	// var h=document.getElementById("111");
	// var i=document.getElementById("222");
	// if (h.style.display === "none") {
		document.getElementById(111).style.visibility = "hidden";
		document.getElementById(222).style.visibility = "visible";
}