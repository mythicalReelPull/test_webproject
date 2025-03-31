let currentSlide = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) { currentSlide = 0; }
    if (n < 0) { currentSlide = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('active')); // Remove 'active' class from all slides
    slides[currentSlide].classList.add('active'); // Add 'active' class to the current slide
}

function nextSlide() {
    showSlide(++currentSlide);
}

function prevSlide() {
    showSlide(--currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);