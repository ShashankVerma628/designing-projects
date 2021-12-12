const hamburger = document.querySelector(".hamburger-container");
const cross = document.querySelector("#cross");
const header = document.querySelector(".header");

hamburger.addEventListener("click",()=>{
    header.classList.toggle("active");
});

cross.addEventListener("click",()=>{
    header.classList.remove("active");
})