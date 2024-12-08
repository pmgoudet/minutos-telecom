// Menu Hamburguer

const mobileBtn = document.querySelector('#btn-mobile')
const nav = document.querySelector('#header__nav')

mobileBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle('active')
}
