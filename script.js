let currentImageSlide = 0;
let currentTextSlide = 0;
let fadeIndex = 0;

function moveSlide(direction, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slides img, .slides .slide');
    if (sliderId === 'image-slider' || sliderId === 'text-slider') {
        currentImageSlide += direction;
        if (currentImageSlide < 0) currentImageSlide = slides.length - 1;
        if (currentImageSlide >= slides.length) currentImageSlide = 0;

        slides.forEach((slide, index) => {
            slide.style.display = (index === currentImageSlide) ? 'block' : 'none';
        });
    }
}

function showImage(imageSrc) {
    const mainImage = document.querySelector('#thumbnail-slider .main-image');
    mainImage.src = imageSrc;
}


function changeImage(imageSrc) {
    const mainImage = document.querySelector('.hover-carousel .main-image');
    mainImage.src = imageSrc;
}

function showFadeSlide() {
    fadeSlides.forEach(slide => slide.classList.remove('active'));
    fadeSlides[fadeIndex].classList.add('active');
    fadeIndex = (fadeIndex + 1) % fadeSlides.length;
}



setInterval(showFadeSlide, 3000);

// Initialize first slides
document.addEventListener("DOMContentLoaded", () => {
    moveSlide(0, 'image-slider');
    moveSlide(0, 'text-slider');
    fadeSlides[0].classList.add('active');
});
