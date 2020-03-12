var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav');
var nav_open = document.querySelector('.nav_open')
var a = document.querySelector('.btn');
var b = document.querySelector('.btn2');
var c = document.querySelector('.btn3');
var body = document.querySelector('.container');

btn.onclick = function(){
	nav.classList.toggle('nav_open');
}

a.onclick = function(){
	nav.classList.toggle('nav_open');
}

b.onclick = function(){
	nav.classList.toggle('nav_open');
}

c.onclick = function(){
	nav.classList.toggle('nav_open');
}

body.onclick = function(){
	console.log(nav.classList.value)
	if (nav.classList.value == "menu nav nav_open") {nav.classList.toggle('nav_open');}
}