const mobileMenu = document.querySelector(".sub_menu_header-img");
const subMenu = document.querySelector(".sub_menu_header-nav");

mobileMenu.addEventListener("click", function (event) {
  subMenu.classList.toggle("show");
});
