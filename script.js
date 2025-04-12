// Simple slider
let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);
