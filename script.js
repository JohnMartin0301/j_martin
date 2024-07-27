function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

document.addEventListener('DOMContentLoaded', (event) => {
    setCurrentYear();
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollUp = document.getElementById('scroll-up');

    // Show the button when scrolling down 100px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    scrollUp.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});