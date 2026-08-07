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

//Collapsible menu for Certifications
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight && content.style.maxHeight !== "0px") {
            content.style.maxHeight = "0px"; // collapse
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // expand
        }
    });
}
