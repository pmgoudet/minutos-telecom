// Menu Hamburguer

const mobileBtn = document.querySelector('#btn-mobile')
const nav = document.querySelector('#header__nav-bar')

mobileBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle('active')
}


// Swiper

const radios = document.querySelectorAll('input[name="slider"]');
let currentSlide = 0; 
const slideInterval = 3000;

function showNextSlide() {
   radios[currentSlide].checked = false;
   currentSlide = (currentSlide + 1) % radios.length;
   radios[currentSlide].checked = true;
}

setInterval(showNextSlide, slideInterval);



