// script.js
let currentIndex = 0; // Current index of the image
const slides = document.querySelector('.slides');
const totalImages = slides.children.length; // Total number of images

function slide() {
    currentIndex = (currentIndex + 1) % (totalImages - 2); // Loop through original images only
    const offset = -currentIndex * (100 / 3); // Calculate offset for three images
    slides.style.transform = `translateX(${offset}%)`; // Move the slides

    // Reset position when reaching the cloned images
    if (currentIndex === totalImages - 3) {
        setTimeout(() => {
            slides.style.transition = 'none'; // Disable transition for reset
            currentIndex = 0; // Reset index
            slides.style.transform = `translateX(0%)`; // Move back to the start
        }, 500); // Match the timing with the transition duration
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease'; // Re-enable transition
        }, 600);
    }
}

// Set interval for automatic sliding
setInterval(slide, 3000); // Change image every 3 seconds