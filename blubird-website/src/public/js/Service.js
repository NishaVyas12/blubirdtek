window.addEventListener("DOMContentLoaded", (event) => {
    if (window.innerWidth > 440) {
        gsap.to(".container.white", {
            scale: 0.7,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".rail-about",
                start: "top 0%",
                end: "bottom 100%",
                scrub: true,
            },
        });
    }

    if (window.innerWidth > 440) {
        gsap.to(".container.capabilities", {
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".rail-capabilities",
                start: "top 0%",
                end: "bottom 110%",
                scrub: true,
            },
        });
    }
    if (window.innerWidth > 440) {
        gsap.from(".myphoto", {
            height: 0,
            scrollTrigger: {
                trigger: ".section.about",
                start: "top 20%",
                end: "bottom 280%",
                scrub: 1,
            },
        });
    }

})