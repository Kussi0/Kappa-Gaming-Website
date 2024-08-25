// JavaScript for "Back to Top" button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Show button when scrolled down 100px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

