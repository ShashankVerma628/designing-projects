const loginBtn = document.getElementById("login-btn");

const crossBtn = document.getElementById("cross-btn");

const modal = document.getElementById("modal-overlay");


loginBtn.addEventListener("click",() => modal.classList.add("show"));

crossBtn.addEventListener("click", () => modal.classList.remove("show"));
