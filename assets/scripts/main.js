const Menu = () => {
  const burguer = document.querySelector(".menu-burguer");
  const item = document.querySelectorAll(".menu-burguer span");
  const menu = document.querySelector(".menu");

  burguer.addEventListener("click", () => {
    item.forEach((item) => {
      item.classList.toggle("active");
    });
    menu.classList.toggle("active");
  });
};
Menu();

$(document).ready(function () {
  $(".slide").owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
});

function isDarkTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return true;
  } else {
    return false;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const imagem = document.querySelector(".logo");
  if (isDarkTheme()) {
    imagem.src = "./assets/images/logo-light.png";
    imagem.srcset = "./assets/images/logo-light.png";
  }
});
