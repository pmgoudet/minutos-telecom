// MENU HAMBURGUER
const mobileBtn = document.querySelector('#btn-mobile');
const nav = document.querySelector('#header__nav');

window.addEventListener('resize', menuResponsif);
mobileBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('active');
}

function menuResponsif() {
    const width = window.innerWidth;

    if (width > 480) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

menuResponsif()


// SLIDER

const radios = document.querySelectorAll('input[name="slider"]');
let currentSlide = 0;
const slideInterval = 3000;

function showNextSlide() {
    radios[currentSlide].checked = false;
    currentSlide = (currentSlide + 1) % radios.length;
    radios[currentSlide].checked = true;
}

setInterval(showNextSlide, slideInterval);


