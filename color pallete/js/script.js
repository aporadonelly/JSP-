document.getElementById('box').onclick = function box() {


	var input = prompt("Enter color you want to see.");
	document.getElementById('box').value;
	// var b = parseInt(document.getElementById('input2').value);
	
	// var ans = (a) + (b);

	document.getElementById('box').innerHTML.style.background = color;
}

document.getElementById('box2').onclick = function box2() {


	var color = prompt("Enter color you want to see.");
	// var a = parseInt(document.getElementById('input1').value);
	// var b = parseInt(document.getElementById('input2').value);
	
	// var ans = (a) + (b);

	document.getElementById('box2').innerHTML.style.background = color;
}