document.addEventListener("DOMContentLoaded", function () {

    // Animace pro intro text a obrázek
    gsap.from('.intro-image', {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.from('.text h2', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
    });

    gsap.from('.text p', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        delay: 1
    });

    // Animace pro technologii sekci
    gsap.from('.tech-content .text', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
    });

    gsap.from('.tech-image', {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: "power3.out",
        delay: 1
    });

    // Animace pro krokové obrázky v Journey sekci
    gsap.from('.journey-steps .step', {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
        delay: 1
    });

    // Animace pro texty v Journey sekci
    gsap.from('.journey-steps h3', {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.2
    });

    // Animace pro pricing tabulku
    gsap.from('.pricing-table', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.5
    });

    // Animace pro rezervaci sekci
    gsap.from('.reserve-section', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
        delay: 2
    });

    gsap.from('.reserve-content h2', {
        opacity: 0,
        x: -50,
        duration: 1.5,
        ease: "power3.out",
        delay: 2.2
    });

    gsap.from('.reserve-form input, .reserve-form select', {
        opacity: 0,
        y: 20,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        delay: 2.5
    });

    gsap.from('.reserve-btn', {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power3.out",
        delay: 3
    });

    // ScrollTrigger animace pro texty a obrázky při scrollování

    // Intro text
    ScrollTrigger.create({
        trigger: '.intro-content',
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.to('.intro-content .text h2', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            });
            gsap.to('.intro-content .text p', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });

    // Technology section
    ScrollTrigger.create({
        trigger: '.tech-content',
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.to('.tech-content .text', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            });
            gsap.to('.tech-image', {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });

    // Journey section
    ScrollTrigger.create({
        trigger: '.journey-steps',
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.to('.journey-steps .step', {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: "power3.out"
            });
            gsap.to('.journey-steps h3', {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });

    // Pricing table animation
    ScrollTrigger.create({
        trigger: '.pricing-table',
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.to('.pricing-table', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });

    // Reserve section animation
    ScrollTrigger.create({
        trigger: '.reserve-section',
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.to('.reserve-section', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            });
            gsap.to('.reserve-content h2', {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });

    // Animace pro patičku (footer)
    ScrollTrigger.create({
        trigger: 'footer',
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.to('footer', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            });
        }
    });
});
// Burger Menu Toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');

    // Toggle the active class for the nav links
    navLinks.classList.toggle('active');

    // Toggle the active class for the burger icon
    menuIcon.classList.toggle('active');
});
