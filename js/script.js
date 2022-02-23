const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var notice = document.querySelectorAll(".notice-box");

for (var i = 0; i < notice.length; i++) {
  notice[i].addEventListener("click", function () {
    for (var j = 0; j < notice.length; j++) {
      notice[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

var swiper = new Swiper(".book-box", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 2.3,
    },
    640: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 2.3,
    },
    1024: {
      slidesPerView: 8,
    },
  },
  observer: true,
  observeParents: true,
});
