// Menu Hamburguer

const mobileBtn = document.querySelector('#btn-mobile')
const nav = document.querySelector('#header__nav-bar')

mobileBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle('active')
}

