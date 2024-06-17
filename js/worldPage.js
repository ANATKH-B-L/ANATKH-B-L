document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.faction');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after the element has become visible
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    elements.forEach(element => {
        observer.observe(element);
    });
});