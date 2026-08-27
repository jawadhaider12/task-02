// =========================
// Splash Screen
// =========================

window.addEventListener("load", function () {

    const splash = document.getElementById("splash");

    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.transition = "0.8s";

        setTimeout(() => {
            splash.style.display = "none";
        }, 800);

    }, 3000);

});


// =========================
// Navbar Background on Scroll
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.5)";

    } else {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "none";

    }

});


// =========================
// Card Hover Animation
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// =========================
// Welcome Message
// =========================

console.log("Welcome to Afridi Defense Technologies");