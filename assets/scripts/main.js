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
