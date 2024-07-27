gsap.registerPlugin(ScrollTrigger);

const magnifiedContent = document.querySelector(".magnified-content");

gsap.to(magnifiedContent, {
    scale: 1, // End zoom level (original size)
    scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const scale = 0.5 + (progress * 0.5); // Adjust scaling based on scroll progress
            magnifiedContent.style.transform = `scale(${scale})`;
        }
    }
});

