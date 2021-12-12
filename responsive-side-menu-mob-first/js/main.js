const hamBurgerBtn = document.getElementById("hamburger-btn");

const crossBtn = document.getElementById("cross-btn");

const sideBar = document.querySelector(".sidebar");

hamBurgerBtn.addEventListener("click", () => sideBar.classList.add("show"));

crossBtn.addEventListener("click", () => sideBar.classList.remove("show"));