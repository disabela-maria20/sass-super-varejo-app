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

document.addEventListener("DOMContentLoaded", () => {
  const imagem = document.querySelector(".logo");
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    const savedTheme = localStorage.getItem("theme");
    imagem.src = "./assets/images/logo-light.png";
    imagem.srcset = "./assets/images/logo-light.png";

    if (savedTheme) {
      // Se o tema foi definido anteriormente, aplica-o
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Caso contrário, define o tema dark por padrão
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  } else {
    imagem.src = "./assets/images/logo.png";
    imagem.srcset = "./assets/images/logo.png";
  }
});
