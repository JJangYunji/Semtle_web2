const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

const notice1 = document.querySelector(".notice-heading1");
const notice1_content = document.querySelector(".notice-content1");
const notice2 = document.querySelector(".notice-heading2");
const notice2_content = document.querySelector(".notice-content2");

notice1.onclick = () => {
  notice1_content.classList.toggle("active");
};

notice2.onclick = () => {
  notice2_content.classList.toggle("active");
};
