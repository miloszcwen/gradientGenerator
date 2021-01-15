import {without} from 'node_modules/lodash';

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); //class
var text = document.querySelector("#text"); //id
var body = document.querySelector("body"); //tag
var random = document.querySelector(".random");

let arr =[1,2,3,4,5,6,7,8];
console.log(without(arr,3))

color1.addEventListener("input", setBgGradient);
color2.addEventListener("input", setBgGradient);
random.addEventListener("click", generateRandomBg);

setBgGradient();

function setBgGradient (){
	body.style.background = "linear-gradient(to right bottom, "
	+color1.value+", "+color2.value+")";
	writeGradient();
}

function writeGradient (){
	// text.append("background: linear-gradient: (to right, "
	// 	+color1.value+", "+color2.value+");");
	text.textContent = body.style.background + ";";
}

function generateRandomBg (){
	color1.value = "#" + Math.floor(Math.random()*16777216).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777216).toString(16);
	setBgGradient();
}