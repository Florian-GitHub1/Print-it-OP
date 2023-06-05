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



let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');
let bannerImg = document.querySelector('.banner-img');

arrow_left.addEventListener('click', () => {
	console.log('click gauche')
});

arrow_right.addEventListener('click', () => {
	console.log('click droit')
});

bannerImg.addEventListener('click', () => {
	console.log('img')
});



function genererDots(slides) {
	for (let i = 0; i < slides.length; i++) {

		 const dotsElement = document.createElement("div");
		 dotsElement.classList.add('dot');

		 document.querySelector(".dots").appendChild(dotsElement);
	}

  }

  genererDots(slides);