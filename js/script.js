document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('year').textContent = new Date().getFullYear();

    gsap.registerPlugin(ScrollTrigger);

    // --- Antigravity Engine: Floating Elements ---
    gsap.utils.toArray(".floating-element").forEach(el => {
        gsap.to(el, {
            x: gsap.utils.random(-15, 15, 1),
            y: gsap.utils.random(-20, 20, 1),
            rotation: gsap.utils.random(-3, 3),
            duration: gsap.utils.random(8, 14),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // --- Cinematic Hero Intro ---
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl.from(".logo-main", { scale: 0.8, opacity: 0, duration: 1.2, ease: "power3.out" })
          .from(".hero-heading", { y: 40, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.7")
          .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, ease: "sine.out" }, "-=0.4");
    
    // --- Antigravity Card Hover ---
    gsap.utils.toArray('.card').forEach(card => {
        // Random rotation for hover
        const rotation = gsap.utils.random(-1, 1, 0.5);
        const tl = gsap.timeline({ paused: true });
        tl.to(card, { rotation: rotation, duration: 0.4, ease: "power2.out" });
        
        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
    });

    // --- Scroll & Section Transitions ---
    gsap.utils.toArray('.section').forEach(section => {
        const children = gsap.utils.toArray(".anim-stagger-child", section);
        
        gsap.from(children, {
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "cubic-bezier(0.25,0.46,0.45,0.94)",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // --- Card Entrance Animation ---
    gsap.from(".anim-card", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".card-grid",
            start: "top 85%",
            toggleActions: "play none none none",
        }
    });
    
    console.log("Production-ready animation and SEO suite initialized.");

});

