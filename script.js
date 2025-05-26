// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
// }

// window.onload = function () {
//     window.scrollTo(0, 0);
// };
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// function toggleMobileMenu() {
//     document.getElementById("menu").classList.toggle("active");
// }

// function name(params) {

// }
