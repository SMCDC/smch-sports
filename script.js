document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (toggleButton && mainNav) {
    toggleButton.addEventListener('click', () => {
      // Check current state (true or false)
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
      
      // Toggle aria-expanded attribute
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle the 'open' class for visual CSS transition
      mainNav.classList.toggle('open');
      
      // Optional: Prevent background scrolling when menu is open
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });
  }
});
