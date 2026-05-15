const slides = document.querySelectorAll(".slideshow img");
let current = 0;

// Initialize
slides[current].classList.add("active");

function showNextSlide() {
  // Remove previous classes
  slides.forEach(slide => slide.classList.remove("prev"));

  // Set current as previous
  slides[current].classList.add("prev");

  // Move to next slide
  current = (current + 1) % slides.length;

  // Set new current slide
  slides[current].classList.add("active");
}

// Change slide every 2 seconds
setInterval(showNextSlide, 2000);
