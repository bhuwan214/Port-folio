// JavaScript for the navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// JavaScript for the responsive design
const mediaQuery = window.matchMedia("(max-width: 768px)");

mediaQuery.addEventListener("change", event => {
  if (event.matches) {
    // JavaScript for the mobile version
  } else {
    // JavaScript for the desktop version
  }
});