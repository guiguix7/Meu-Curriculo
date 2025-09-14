document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    const animateCircle = (circle) => {
        const target = parseInt(circle.style.getPropertyValue("--percent"));
        let progress = 0;

        const interval = setInterval(() => {
            progress++;
            circle.style.setProperty("--percent", progress);
            circle.setAttribute("data-label", progress + "%");

            if (progress >= target) {
                clearInterval(interval);
            }
        }, 30);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCircle(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 });

    circles.forEach(circle => observer.observe(circle));
});
