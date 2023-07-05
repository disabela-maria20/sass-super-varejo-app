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

document.addEventListener("DOMContentLoaded", () => {
  const imagem = document.querySelector(".logo");
  console.log(window.location.pathname);
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    imagem.src = "./assets/images/logo-light.png";
    imagem.srcset = "./assets/images/logo-light.png";
  } else {
    imagem.src = "./assets/images/logo.png";
    imagem.srcset = "./assets/images/logo.png";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
});
