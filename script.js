document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const toggle = document.querySelector('.menu-toggle');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true' || false;
            toggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('open');
        });

        // Optional: Close menu when a link is clicked (useful on single-page or for mobile UX)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('open')) {
                    toggle.setAttribute('aria-expanded', 'false');
                    nav.classList.remove('open');
                }
            });
        });
    }
});

// Function used on index.html to scroll to activities section
function scrollToActivities(){
  document.getElementById("activities").scrollIntoView({behavior:"smooth"});
}
