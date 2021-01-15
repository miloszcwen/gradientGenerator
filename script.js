const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2"); //class
const text = document.querySelector("#text"); //id
const body = document.querySelector("body"); //tag
const random = document.querySelector(".random");
const gradientValues = [];


color1.addEventListener("input", setBgGradient);
color2.addEventListener("input", setBgGradient);
random.addEventListener("click", generateRandomBg);

setBgGradient();

function setBgGradient (){
	body.style.background = "linear-gradient(to right bottom, "
	+color1.value+", "+color2.value+")";
	writeGradientOnScreen();
	storeGradientValues();
}

function writeGradientOnScreen (){
		text.textContent = body.style.background + ";";
}

function generateRandomBg (){
	color1.value = "#" + Math.floor(Math.random()*16777216).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777216).toString(16);
	setBgGradient();
}

function storeGradientValues(){
	gradientValues.push({c1: color1.value, c2: color2.value});
	console.log(gradientValues);
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
  gradientValues.forEach((val)=>{
	console.log(val)
	modalText.textContent+=JSON.stringify(val);
  })

})

closeModalButton.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

function closeModal() {
  modal.classList.remove("open")
  overlay.classList.remove("open")
}

//////////////////////////////////////////////////////////////////////////////