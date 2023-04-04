window.sr = ScrollReveal();
sr.reveal('.anim');


function menuToggle() {
    var nav = document.getElementById('menu-overlay');
    nav.classList.toggle('active');
    var navIcon = document.getElementById('toggleIcon');
    navIcon.classList.toggle('active');
}

function closeMenuOverlay() {
    var nav = document.getElementById('menu-overlay');
    nav.classList.remove('active');
    var navIcon = document.getElementById('toggleIcon');
    navIcon.classList.remove('active');
}

var menuLinks = document.querySelectorAll('#menu-overlay a');
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
        setTimeout(function() {
            closeMenuOverlay();
        }, 500);
    });
});