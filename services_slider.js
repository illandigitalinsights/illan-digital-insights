let currentIndex = 0;
const slides = document.querySelector('.services_slides');
const totalImages = document.querySelectorAll('.services_tool-images li').length;

function slide() {
    const slideWidth = 100 / totalImages; // Calculate width percentage for each slide
    const offset = -currentIndex * slideWidth; // Calculate offset
    slides.style.transform = `translateX(${offset}%)`; // Move slides

    currentIndex = (currentIndex + 1) % totalImages; // Update current index
}

// Auto slide every 3 seconds
setInterval(slide, 3000);

// Optional: Handle window resize
window.addEventListener('resize', () => {
    const slideWidth = 100 / totalImages; // Recalculate slide width
    slides.style.transform = `translateX(${-currentIndex * slideWidth}%)`; // Adjust position
});