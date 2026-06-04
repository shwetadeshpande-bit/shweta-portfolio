// Typing Effect

const words = [
  "Technical Writer",
  "API Documentation Writer",
  "Documentation Specialist",
  "Markdown Documentation Writer",
  "MCA Graduate"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}


// Reveal Animation

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

  });

}, {
  threshold: 0.1
});

document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right"
).forEach((el) => {
  observer.observe(el);
});


// Start typing

typeEffect();




// Custom Cursor

const cursor = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");

document.addEventListener("mousemove", (e) => {

  if(cursor){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }

  if(cursorTrail){
    cursorTrail.style.left = e.clientX + "px";
    cursorTrail.style.top = e.clientY + "px";
  }

});


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("typing-text").textContent = "Technical Writer";
// });