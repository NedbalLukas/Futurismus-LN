window.onload = function() {
    gsap.from("header h1", { duration: 2.5, y: -100, opacity: 0, ease: "power4.out" });
    gsap.from("header p", { duration: 2, y: 50, opacity: 0, delay: 1 });
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#intro .content", { scrollTrigger: "#intro", x: -200, opacity: 0, duration: 1.5 });
    gsap.from("#intro img", { scrollTrigger: "#intro", x: 200, opacity: 0, duration: 1.5 });
    
    gsap.from("#technology h2", { scrollTrigger: "#technology", y: 100, opacity: 0, duration: 1.5, ease: "power2.out" });
    gsap.from("#technology img", { scrollTrigger: "#technology", scale: 0.8, opacity: 0, duration: 2, ease: "elastic.out(1, 0.75)" });
    gsap.from(".journey-step", { scrollTrigger: ".journey-grid", scale: 0.5, opacity: 0, stagger: 0.3, duration: 1.5, ease: "back.out(1.5)" });
    gsap.from("#signup", { scrollTrigger: "#signup", y: 100, opacity: 0, duration: 1.5, ease: "power2.out" });

    const form = document.getElementById('flightForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Formulář byl úspěšně odeslán!");
    });
}
