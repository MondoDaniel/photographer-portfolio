/**
 * Gestion du menu hamburger pour le portfolio PhotoStudio
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        // 1. On bascule la classe 'active' sur la liste des liens
        navLinks.classList.toggle('active');

        // 2. On change l'icône : de "bars" (menu) à "times" (croix)
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Optionnel : Fermer le menu si on clique sur un lien (utile pour les ancres)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.classList.replace('fa-times', 'fa-bars');
        });
    });
});