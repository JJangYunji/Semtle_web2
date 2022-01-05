const tgl = document.querySelector(".navbar__tgl");
const menu = document.querySelector(".navbar__menu");

tgl.addEventListener("click", () => {
  menu.classList.toggle("active");
});
