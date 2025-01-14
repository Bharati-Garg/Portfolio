// Typing Script JS
var typed = new Typed(".typing", {
  strings: ["Frontend Developer", "Web Developer", "UI Developer"],
  typeSpeed: 80,
  backSpeed: 80,
});

var typed = new Typed(".typing-2", {
  strings: ["Frontend Developer", "Web Developer", "UI Developer"],
  typeSpeed: 100,
  backSpeed: 60,
});

//Show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);

