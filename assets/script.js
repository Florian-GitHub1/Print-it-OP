const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerText = banner.querySelector("p");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;



function genererDots(id, active = false) {
		const dotsElement = document.createElement("div");

		dotsElement.setAttribute("id", currentSlide++);

		dotsElement.classList.add('dot');
		dotsElement.classList.add('dot_selected');

		if (active) dotsElement.classList.remove("dot_selected");
		document.querySelector(".dots").appendChild(dotsElement);
};

slides.forEach(genererDots);


const dotElem = document.getElementById(currentSlide);

const dotsArray = Array.from(document.querySelectorAll('.dot'));


function updateActiveDot(){
	dotsArray.forEach((dots => {
		if (dots.getAttribute("id") == currentSlide){
			dots.classList.add("dot_selected")
		}else{
			dots.classList.remove("dot_selected")
		}
	}));
}



 function showNextSlide() {
 	currentSlide = (currentSlide + 1) % slides.length; 
 	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
 	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot()
 }
 function showPreviousSlide() {
 	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
 	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
 	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot()
 }


arrow_left.addEventListener('click', showPreviousSlide)
arrow_right.addEventListener('click', showNextSlide)

