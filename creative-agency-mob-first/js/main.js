const menuBtn = document.querySelector("#menu-btn");
const modal = document.querySelector(".modal");

function showNav(){
    menuBtn.classList.toggle("cross");
    modal.classList.toggle("active");
}

menuBtn.addEventListener("click",showNav);
