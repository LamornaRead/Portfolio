const hamburger = document.querySelector('.hamburger');
const navSmall = document.querySelector('.small-nav');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navSmall.classList.toggle('active');
};




// $('.hamburger').on('click', function(){
//     $(this).toggle('active');
//     $('.small-nav').toggle('active');
// });