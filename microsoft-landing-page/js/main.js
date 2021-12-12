const toggleBtn = document.querySelector('.toggle-bar i');

const navBar = document.querySelector('nav');

toggleBtn.addEventListener("click",showNavBar);

function showNavBar(){
    navBar.classList.toggle('show');
}