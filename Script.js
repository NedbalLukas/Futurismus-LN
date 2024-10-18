window.onload = function() {
    // Animace pomocí GSAP
    gsap.from("header h1", { duration: 2, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("header p", { duration: 2, x: 50, opacity: 0, delay: 1 });

    gsap.from("#description h2", { duration: 1, x: -100, opacity: 0, stagger: 0.5, delay: 1.5 });
    gsap.from("#description p", { duration: 1, x: 100, opacity: 0, stagger: 0.5, delay: 2 });

    gsap.from("#form h2", { duration: 1.5, scale: 0.5, opacity: 0, delay: 3 });
    gsap.from("#flightForm", { duration: 2, opacity: 0, delay: 3.5 });

    // Formulářová validace a odeslání
    const form = document.getElementById('flightForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Formulář byl úspěšně odeslán!");
    });
}
