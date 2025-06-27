'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


const audio = document.getElementById("bg-music");
const popup = document.getElementById("music-popup");
const yesBtn = document.getElementById("yes-music");
const noBtn = document.getElementById("no-music");
const musicIcon = document.getElementById("music-icon");
const musicToggle = document.getElementById("music-toggle");
let isPlaying = false;

yesBtn.addEventListener("click", () => {
  audio.play().catch(() => {});
  musicIcon.setAttribute("name", "pause-circle-outline");
  isPlaying = true;
  popup.style.display = "none";
});

noBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    musicIcon.setAttribute("name", "musical-notes-outline");
  } else {
    audio.play();
    musicIcon.setAttribute("name", "pause-circle-outline");
  }
  isPlaying = !isPlaying;
});