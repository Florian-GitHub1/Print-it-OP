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


// Déclaration de mes constantes / variables 
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerText = banner.querySelector("p");
const dots = document.querySelectorAll(".dot");

// Set l'index à 0
let currentSlide = 0;



function genererDots(id, active = false) {
	// Création de la div 
	const dotsElement = document.createElement("div");
	// Attribution d'un id à chaque div = l'incrémentation de l'index
	dotsElement.setAttribute("id", currentSlide++);
	// Ajout des classes dot et dot_selected à notre div
	dotsElement.classList.add('dot');
	dotsElement.classList.add('dot_selected');
	// Si pas actif alors on enlève la classe dot_selected car active = false
	if (active) dotsElement.classList.remove("dot_selected");
	// Ajout du code dans le parent (div dots)
	document.querySelector(".dots").appendChild(dotsElement);
};

// Appel de la fonction * le nombre délements du tableau
slides.forEach(genererDots);


// Création d'un tableau pour tout les élements ayant la classe dot
const dotsArray = Array.from(document.querySelectorAll('.dot'));


function updateActiveDot(){
	// Pour chaque élement du tableau
	dotsArray.forEach((dots => {
		// Si id = index alors ajouter la classe dot_selected
		if (dots.getAttribute("id") == currentSlide){
			dots.classList.add("dot_selected")
		// Sinon enlever la classe dot_selcted
		}else{
			dots.classList.remove("dot_selected")
		}
	}));
}



 function showNextSlide() {
	// Incrémentation de l'index et division de celui-ci par la longueur du tableau
 	currentSlide = (currentSlide + 1) % slides.length; 
	// Ajout de la source des images en dynamique
 	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	// Remplacement de la tagline par celle correspondant à l'index donc l'image
 	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot()
 }
 function showPreviousSlide() {
	// Décrémentation de l'index et division de celui-ci par la longueur du tableau
 	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	// Ajout de la source des images en dynamique
 	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	// Remplacement de la tagline par celle correspondant à l'index donc l'image
 	bannerText.innerHTML = slides[currentSlide].tagLine;
	updateActiveDot()
 }

// EvenListener qui déclenche les fonctions correspondantes au click
arrow_left.addEventListener('click', showPreviousSlide)
arrow_right.addEventListener('click', showNextSlide)

