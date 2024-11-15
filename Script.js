document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#infocard h1", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#infocard",
            start: "top 80%", 
            toggleActions: "play none none none"  
        }
    });
    gsap.from("#infocard p", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#infocard",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});
gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.step').forEach(step => {
        gsap.from(step, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: step,
                scrub: true
            }
        });
    });
    gsap.from("h2", {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
            trigger: "h2",
            start: "top 90%",
            end: "top 30%",
            scrub: true
        }
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".reserve-section", {
        scale: 0.8, 
        opacity: 0, 
        duration: 1.2,
        ease: "power3.out", 
        scrollTrigger: {
            trigger: ".reserve-section",
            start: "top 80%",  
            end: "top 30%",
            scrub: true
        }
    });
    gsap.from("h2", {
        scale: 0.5,  
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "h2",
            start: "top 90%",
            end: "top 30%",
            scrub: true
        }
    });

gsap.from("h2", {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "h2",
        start: "top 90%",
        end: "top 30%",
        scrub: true
    }
});
gsap.from(".pricing-table tr", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".pricing-table",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    }
});
gsap.from(".pricing-table td", {
    opacity: 0,
    x: -30,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".pricing-table",
        start: "top 80%",
        end: "top 30%",
        scrub: true
    }
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".intro-image", {
        opacity: 0,
        x: -100, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".intro-content",
            start: "top 80%", 
            toggleActions: "play none none none"
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("h2", {
        opacity: 0,
        y: -50, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "h2",
            start: "top 80%", 
            toggleActions: "play none none none"
        }
    });
    gsap.from(".tech-content .text p", {
        opacity: 0,
        y: 30, 
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".tech-content",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".tech-image", {
        opacity: 0,
        x: 100, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".tech-content",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});
