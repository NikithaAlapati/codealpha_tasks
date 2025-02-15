const homeLink = document.querySelector('#home-link');
const homeSection = document.querySelector('#home');
const leftSideText = document.querySelector('.left-side');

// Function to trigger animation
function triggerAnimations() {
  leftSideText.classList.add('home-animation');
}

// Trigger animations when the page loads
window.onload = function() {
  triggerAnimations(); // Animate when the page is loaded
};

// Add click event listener to the "Home" link
homeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  // Remove any existing animation classes in case the user clicks again
  leftSideText.classList.remove('home-animation');

  // Force reflow to restart the animation (trick the browser into re-triggering the animation)
  void homeSection.offsetWidth;

  // Add animation classes to trigger animations
  leftSideText.classList.add('home-animation');

  // Scroll smoothly to the home section
  homeSection.scrollIntoView({ behavior: 'smooth' });
});
