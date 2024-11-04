document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.about-content, .education-item');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        animatedElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to check initial position
});


