const mobile__nav = document.querySelector(".mobile__nav-btn");
const header__nav = document.querySelector(".header");

const toggleNavbar = () => {
  header__nav.classList.toggle("active");
};

mobile__nav.addEventListener("click", () => toggleNavbar());
