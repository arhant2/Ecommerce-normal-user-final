const navbar = document.querySelector('.js--components-function--navbar');
const navbarContainer = document.querySelector(
  '.js--components--navbar-container'
);

let scrolled = window.scrollY;

console.log(navbar);
console.log(navbarContainer);

if (navbar && navbarContainer) {
  const { toggleClass } = navbar.dataset;
  console.log(toggleClass);
  if (toggleClass) {
    window.addEventListener('scroll', function () {
      if (
        window.scrollY > navbarContainer.offsetHeight &&
        window.scrollY <= scrolled
      ) {
        navbar.classList.add(toggleClass);
      } else {
        navbar.classList.remove(toggleClass);
      }
      scrolled = window.scrollY;
    });
  }
}
