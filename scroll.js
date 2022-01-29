gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".part-1"
});

gsap.to(".section-1 h1", {
    scrollTrigger: ".section-2",
    duration: 2,
    rotation: 360
});

gsap.to(".section", {
    scrollTrigger: {
        trigger: ".item-1",
        toggleActions: "restart pause reverse pause"
    },
    duration: 2,
    backgroundColor: "",
    ease: "none"
});

gsap.to(".section-2 h1 p", {
    scrollTrigger: ".section-2",
    scale: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2"
});