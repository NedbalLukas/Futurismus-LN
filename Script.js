// GSAP animation for sections
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top center",
            scrub: true,
        }
    });
});

// Smooth scrolling for links
const links = document.querySelectorAll('.nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        gsap.to(window, {
            scrollTo: {
                y: targetSection.offsetTop,
                autoKill: false
            },
            duration: 1,
            ease: "power2.out"
        });
    });
});
