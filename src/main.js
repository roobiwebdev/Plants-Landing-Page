const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hambergur = document.querySelector("#hambergur");

hambergur.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hambergur.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hambergur.classList.toggle("ri-close-large-line");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnIntraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true,
  breakpoints: {
    640: {
      slidesPreView: 1,
    },
    768: {
      slidesPreView: 2,
    },
    1024: {
      slidesPreView: 3,
    },
  },
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data");
sr.reveal(".head__data", { delay: 200 });
sr.reveal(".home__img", { delay: 500, scale: 0.5 });

sr.reveal(".service__card", { distance: "100px" });
sr.reveal(".service__card_1", { delay: 100 });
sr.reveal(".service__card_2", { delay: 300 });
sr.reveal(".service__card_3", { delay: 500 });
sr.reveal(".service__card_4", { delay: 700 });

sr.reveal(".about__cont");
sr.reveal(".about__leaf", { origin: "right" });
sr.reveal(".about__item_img", { distance: "400px", origin: "left" });
sr.reveal(".about__item_disc", { distance: "400px", origin: "right" });

sr.reveal(".about__item2_img", { distance: "400px", origin: "right" });
sr.reveal(".about__item2_disc", { distance: "400px", origin: "left" });

sr.reveal(".popular__card", { distance: "100px" });
sr.reveal(".popular__card_1", { delay: 100 , origin:"left", distance: "400px"});
sr.reveal(".popular__card_2", { delay: 300, origin: "bottom", distance: "300px" });
sr.reveal(".popular__card_3", { delay: 500,  origin: "top", distance: "300px"  });
sr.reveal(".popular__card_4", { delay: 700, origin: "right", distance: "400px"  });

sr.reveal(".customer__review");


sr.reveal(".footer__cont");
