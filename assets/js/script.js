const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    //solution simple pour l'instant : on bascule l'affichage
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "rgba(0, 51, 102, 0.9)";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "20px";
    }
});