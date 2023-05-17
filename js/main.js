//hamburger vars
const hamburger = document.querySelector('.hamburger');
const navSmall = document.querySelector('.small-nav');
const navLink = document.querySelectorAll('.nav-li');

//hamburger event and function

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navSmall.classList.toggle('active');
};

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navSmall.classList.remove('active');
}