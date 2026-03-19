// ANIMATION HERO
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector("section.py-5.vh-100.d-flex");
    const layer = document.createElement("div");
    layer.classList.add("snow-layer");
    hero.prepend(layer); 
});


document.addEventListener("DOMContentLoaded", () => {

    const layer = document.querySelector(".snow-layer");

    for (let i = 0; i < 60; i++) {
        const dot = document.createElement("div");
        dot.classList.add("snowflake");

        const size = Math.random() * 7 + 4;
        dot.style.width = size + "px";
        dot.style.height = size + "px";

        dot.style.left = Math.random() * 100 + "vw";
        dot.style.animationDuration = (Math.random() * 7 + 5) + "s";
        dot.style.animationDelay = Math.random() * 5 + "s";

        layer.appendChild(dot);
    }

});

// SCROLL ANIMATION NABVAR
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
