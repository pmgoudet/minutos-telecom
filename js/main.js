// MENU HAMBURGUER

const mobileBtn = document.querySelector('#btn-mobile')
const nav = document.querySelector('#nav')

mobileBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    nav.classList.toggle('active')
}