const navigation = document.querySelector('.navigation');

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburgermenu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('open');
        }
    });
});