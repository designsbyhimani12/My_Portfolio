
// 1. WELCOME MESSAGE
console.log("Welcome to Himani's Portfolio Website!");


// 2. CONTACT FORM
const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {

        alert("Thank you " + name + "! Your message is ready.");

        formMessage.textContent =
            "Thank you for contacting me, " + name + "!";

        contactForm.reset();

    }

});


// 3. NAVIGATION HOVER EFFECT
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation link clicked!");

    });

});


// 4. BUTTON MESSAGE
const exploreButton = document.querySelector(".hero .btn");

exploreButton.addEventListener("click", function() {

    console.log("Welcome to my projects!");

});


// 5. BACKGROUND MESSAGE
console.log("Website loaded successfully!");
// Typing Animation

const typingElement = document.getElementById("typing");

const words = [
    "Student",
    "Graphic Designer",
    "Content Creator",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let word = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        word.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === word.length) {
        deleting = true;
        speed = 1000;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});

const topBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
});
document.addEventListener("click", function (event) {
    const button = event.target.closest("#themeToggle");

    if (!button) return;

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
});