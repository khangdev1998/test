window.onload = function() {
    gsap.from(".caption", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        rotationX: 90,
        transformOrigin: "top center",
        ease: "power2.out"
    });
    
    gsap.from(".heading", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        rotationX: -90,
        transformOrigin: "bottom center",
        ease: "power2.out",
        delay: 0.5 
    });
};
