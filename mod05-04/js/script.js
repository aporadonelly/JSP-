document.getElementById('btn').onclick = function largest(){	
	var num1 = (document.getElementById("num1").value);
	var num2 = (document.getElementById("num2").value);
	if(num1 > num2){
		document.getElementById('result').innerHTML = "Highest Number: "+ num1;
	}
	else{
		document.getElementById('result').innerHTML = "Highest Number: "+ num2;
	}
}


// For converting grades
document.getElementById('btn2').onclick = function convert(){	
	var grade = (document.getElementById("grade").value);
	if(grade >= 90){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: A";
	}else if (grade >= 80){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: B";
	}else if (grade >= 70){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: C";
	}else if (grade >= 65){
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: D";
	}else {
		document.getElementById('gradeResult').innerHTML = "Grade Conversion: D";
	}
}



document.getElementById('btn3').onclick = function change_greetings(){
	var french = (document.getElementById('french').value);
	// if(language==french){
	document.getElementById('greeting_holder').innerHTML = "Je t’aime";
	}

document.getElementById('btn3').onclick = function change_greetings(){
	var language = (document.getElementById("italian").value);
	document.getElementById('greeting_holder').innerHTML = "Ti amo";
	}
document.getElementById('btn3').onclick = function change_greetings(){
	var language = (document.getElementById("romanian").value);
	document.getElementById('greeting_holder').innerHTML = "Te iubesc";
	}

document.getElementById('btn3').onclick = function change_greetings(){
	var language = (document.getElementById("filipino").value);
	document.getElementById('greeting_holder').innerHTML = "Mahal Kita";
	}




















