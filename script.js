document.addEventListener('DOMContentLoaded', () => {
    // Skill Bar Animation using Intersection Observer
    const skillBars = document.querySelectorAll('.skill_bar .bar span');

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width'); // Set the width to the data-width attribute
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold if needed

    skillBars.forEach(bar => skillObserver.observe(bar));

    // Options for section Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger animation when 50% of the section is visible
    };

    // Intersection Observer to handle section animations
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Initially hide sections
        sectionObserver.observe(section);
    });

    // Handle clicks on navigation links for smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);

            // Smooth scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });

            // Ensure the animation happens on click by adding 'animate' class if not already visible
            if (!section.classList.contains('animate')) {
                section.classList.add('animate');
            }
        });
    });

    // Adding specific animations for elements within sections
    const leftElements = document.querySelectorAll('.slide-in-left');
    const rightElements = document.querySelectorAll('.slide-in-right');

    leftElements.forEach(el => {
        el.classList.add('hidden'); // Initially hide
        sectionObserver.observe(el);
    });

    rightElements.forEach(el => {
        el.classList.add('hidden'); // Initially hide
        sectionObserver.observe(el);
    });

    // For navbar animation (assuming the nav should animate when a certain section is reached)
    const nav = document.querySelector('nav');
    nav.classList.add('hidden'); // Initially hide
    sectionObserver.observe(nav);
});
