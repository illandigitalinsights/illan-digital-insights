let currentIndex = 0; // Current index of the image
const slides = document.querySelector('.slides');
const totalImages = slides.children.length; // Total number of images

// Function to calculate the width percentage based on the screen size
function getWidthPercentage() {
    return window.innerWidth < 768 ? 100 : (100 / 3); // 100% for mobile, 33.33% for desktop
}

function slide() {
    const offset = -currentIndex * getWidthPercentage(); // Calculate offset based on current index
    slides.style.transform = `translateX(${offset}%)`; // Move the slides

    currentIndex = (currentIndex + 1) % totalImages; // Loop through all images

    // Reset position when reaching the last image
    if (currentIndex === 0) {
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
setInterval(slide, 1000); // Change image every 1 seconds

// Update the slide on resize to accommodate responsive design
window.addEventListener('resize', () => {
    slides.style.transform = `translateX(${-currentIndex * getWidthPercentage()}%)`; // Adjust position on resize
});