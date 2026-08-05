    window.addEventListener('DOMContentLoaded', () => {
        const section = document.getElementById('delayed-section');

        // 1. Show the section after 5 seconds
        setTimeout(() => {
            section.style.display = 'block';
        }, 5000);

        // 2. Hide the section after 10 seconds from page load
        setTimeout(() => {
            section.style.display = 'none';
        }, 15000);
    });
//event listener for hamburger dropdown button
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('dropdown-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
