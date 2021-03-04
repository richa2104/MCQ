console.log("Welcome");
let ans_all = [];
let ans_c = {
	language : "C",
	answer   : [14,21,31,43,53,62,73,84,93,102]
}
let ans_cpp = {
	language : "C++",
	answer   : [13,23,31,44,52,62,71,82,93,102]
}
let ans_java = {
	language : "Java",
	answer   : [11,23,31,44,52,64,73,83,92,104]
}
let ans_js = {
	language : "JavaScript",
	answer   : [14,23,34,44,51,64,72,81,93,102]
}
ans_all.push(ans_c);
ans_all.push(ans_cpp);
ans_all.push(ans_java);
ans_all.push(ans_js);
localStorage.setItem('Actual_answer', JSON.stringify(ans_all));
function choose_lang(){
	var lang = document.getElementsByName('sub');   
	let selected_lang = "C"; //by Default       
    for(i = 0; i < lang.length; i++) { 
        if(lang[i].checked){
        	selected_lang = lang[i].value;
        	break;
    	}
    }
    let x1 = selected_lang.split(" ");
    let get_json = {language : x1[0]};
    localStorage.setItem('Language5416', JSON.stringify(get_json));
	window.location.replace("Screen2.html");
}

function start_test() {
 	let get1 = JSON.parse(localStorage.getItem('Language5416'));
 	let lang1 = get1.language;
    console.log(get1);
    localStorage.removeItem("Language5416");
    // console.log(get1);
    window.location.replace(lang1+".html");
}