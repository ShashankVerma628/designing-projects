const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");

const container = document.getElementById("container");


signUpBtn.addEventListener("click",()=> container.classList.add("right-panel-active"));


signInBtn.addEventListener("click",()=> container.classList.remove("right-panel-active"));