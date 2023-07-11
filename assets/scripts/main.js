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

document.addEventListener("DOMContentLoaded", () => {
  const categoriaAtual = window.location.pathname.split("/")[2];
  document.documentElement.classList.add(
    "categoria",
    `categoria-${categoriaAtual}`
  );
});

document.addEventListener("DOMContentLoaded", function (event) {
  const interestsArray = [
    "APAS SHOW",
    "Artigo",
    "Atacarejo",
    "Campanha",
    "Consumo",
    "E-Commerce",
  ];
  const arr_select = [];

  for (const btn in interestsArray) {
    const area_interests = document.querySelector(".area_interests");
    const btn_interests = document.createElement("button");
    area_interests.append(btn_interests);
    btn_interests.innerText += interestsArray[btn];
    btn_interests.classList.add("btn_interests");
    btn_interests.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.toggle("active");
      if (arr_select.includes(e.target.innerText)) {
        const index = arr_select.indexOf(e.target.innerText);
        arr_select.splice(index, 1);
      } else {
        arr_select.push(e.target.innerText);
      }

      console.log(arr_select);
    });
  }
});
