let myArr = [];
let divs = document.querySelectorAll('div');
let letter =  document.querySelector('h2');
for(let i = 0; i < divs.length; i++){
		divs[i].addEventListener('click',function(){
			divs[i].innerHTML = letter;
		})
	}