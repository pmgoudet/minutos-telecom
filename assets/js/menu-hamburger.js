// MENU HAMBURGUER
const mobileBtn = document.querySelector('#btn-menu-principal');
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
