const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2"); //class
const text = document.querySelector("#text"); //id
const body = document.querySelector("body"); //tag
const random = document.querySelector(".random");
const gradientValues = [];
const ul = document.getElementById("ul");



color1.addEventListener("input", setBgGradient);
color2.addEventListener("input", setBgGradient);
random.addEventListener("click", generateRandomBg);

setBgGradient();

function setBgGradient (){
	body.style.backgroundImage = "linear-gradient(to right bottom, "
	+color1.value+", "+color2.value+")";
	writeGradientOnScreen();
	storeGradientValues();
}

function writeGradientOnScreen (){
		text.textContent = "backgroundImage: "+ body.style.backgroundImage + ";";
}

function generateRandomBg (){
	color1.value = "#" + Math.floor(Math.random()*16777216).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777216).toString(16);
	setBgGradient();
}

function storeGradientValues(){
	gradientValues.push({c1: color1.value, c2: color2.value});
	addListEl(color1.value, color2.value);

}

//////////////////////////////////////////////////////////////////////////

const modal = document.querySelector("#modal")
const openModalButton = document.querySelector("#open-modal-btn")
const closeModalButton = document.querySelector("#close-modal-btn")
const overlay = document.querySelector("#overlay")
const modalText = document.querySelector("#modal-text")

openModalButton.addEventListener("click", () => {
  modal.classList.add("open")
  overlay.classList.add("open")
})

closeModalButton.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

function closeModal() {
  modal.classList.remove("open")
  overlay.classList.remove("open")
}

//////////////////////////////////////////////////////////////////////////////

function addListEl (c1, c2){
	const li = document.createElement("li");
	li.className="li";
	ul.appendChild(li)
	addDivBox(c1, c2, li);
}
function addDivBox(c1, c2, li){
	const box = document.createElement("div");
	box.className="box";
	box.style.backgroundImage = "linear-gradient(to right bottom, "+c1+", "+c2+")";
	li.appendChild(box);
	addDelBtn(box);
}

function addDelBtn (box){
	const btn = document.createElement("button");
	btn.className="del";
	btn.appendChild(document.createTextNode("delete"));
	box.appendChild(btn);
	btn.addEventListener("click", deleteBox);

}
function deleteBox(){
		event.target.parentNode.parentNode.remove();

}
