    window.addEventListener('DOMContentLoaded', () => {
        const section = document.getElementById('delayed-section');

        // 1. Show the section after 3 seconds
        setTimeout(() => {
            section.style.display = 'block';
        }, 3000);

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

//PDF.js setup for rendering PDFs
const url = '/documents/Snagit-Cert.pdf';
const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(pdf => {
pdf.getPage(1).then(page => {
const scale = 1.5;
const viewport = page.getViewport({ scale });
const canvas = document.getElementById('pdf-canvas-Snagit-Cert');
const context = canvas.getContext('2d');
canvas.height = viewport.height;
canvas.width = viewport.width;
page.render({ canvasContext: context, viewport });
});
});

//PFD.js setup for rendering PDF 2
const url2 = '/documents/Crisis_Intervention_Training_20260421.pdf';
const loadingTask2 = pdfjsLib.getDocument(url2);
loadingTask2.promise.then(pdf => {
pdf.getPage(1).then(page => {
    const scale = 1.5;
    const viewport = page.getViewport({ scale });
    const canvas = document.getElementById('pdf-canvas-Crisis-Intervention');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: context, viewport });
});
});
