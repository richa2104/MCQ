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
var a=1;
var i=1;
var b=10;
var j=10;
function next_que(){
	document.getElementById('button_prev').style.display = 'block';
	for(i=1;1<=10;i++){
		if(a==1){
			document.getElementById(1).style.display = "none";
			document.getElementById(a+1).style.display = "block";
			a++;
			console.log("next if a = " + a);
			break;
		}
		else if(a>1 && a<=8){
			a++;
			document.getElementById(a).style.display = "block";
			document.getElementById(a-1).style.display = "none";
			console.log("next else if a = " + a);
			break;
		}
		else{
			a++;
			document.getElementById(a).style.display = "block";
			document.getElementById(a-1).style.display = "none";
			document.getElementById('button_next').style.display = 'none';
			document.getElementById('button_lang').style.display = 'block';
			console.log("next else a = " + a);
			break;
		}
	}
}
function prev_que(){
	for(j=10;j>=1;j--){
		if(a==10){
			document.getElementById('button_next').style.display = 'block';
			document.getElementById(a).style.display = "none";
			document.getElementById(a-1).style.display = "block";
			document.getElementById('button_lang').style.display = 'none';
			a--;
			console.log("prev if a = " + a);
			break;
		}
		else if(a>2 || a==8){
			document.getElementById('button_next').style.display = 'block';
			document.getElementById(a).style.display = "none";
			document.getElementById(a-1).style.display = "block";
			document.getElementById('button_lang').style.display = 'none';
			a--;
			console.log("prev else if a = " + a);
			break;
		}
		else{
			document.getElementById('button_prev').style.display = 'none';
			document.getElementById(a).style.display = "none";
			document.getElementById(a-1).style.display = "block";
			document.getElementById('button_lang').style.display = 'none';
			a--;
			console.log("prev else a = " + a);
			break;
		}
	}
}
window.onload = function() {
	for(let k=1; k<=10;k++){
		if(k==1){
			document.getElementById(k).style.display = 'block';
			document.getElementById('button_prev').style.display = 'none';
			document.getElementById('button_lang').style.display = 'none';
		}
		else{
			document.getElementById(k).style.display = 'none';
		}
	}
};