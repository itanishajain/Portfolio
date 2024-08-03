window.addEventListener('scroll', function() {
    const skillBars = document.querySelectorAll('.skill_bar .bar span');
    skillBars.forEach(bar => {
        const position = bar.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            bar.style.width = bar.getAttribute('data-width'); // Set the width to the data-width attribute
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger animation when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Adding specific animations for elements within sections
    const leftElements = document.querySelectorAll('.slide-in-left');
    const rightElements = document.querySelectorAll('.slide-in-right');

    leftElements.forEach(el => {
        observer.observe(el);
        el.classList.add('animate-slide-in-left');
    });

    rightElements.forEach(el => {
        observer.observe(el);
        el.classList.add('animate-slide-in-right');
    });

    // For navbar animation
    const nav = document.querySelector('nav');
    nav.classList.add('nav-animate');
    observer.observe(nav);
});
