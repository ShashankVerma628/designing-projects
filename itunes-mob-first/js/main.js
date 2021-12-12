const hamburgerBtn = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

function showNavBar(){
    navbar.classList.toggle("show");
}

hamburgerBtn.addEventListener("click",showNavBar);
