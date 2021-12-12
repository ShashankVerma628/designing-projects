const mobileSearchOverlay = document.querySelector(".mobile-search-overlay");
const desktopSearchOverlay = document.querySelector(".desktop-overlay");
const searchBtn = document.querySelector("#search-btn");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navOverlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#close-btn");
const desktopSearchBtn = document.querySelector("#desktop-search-btn");



// Mobile Search 
document.addEventListener("click", (e) => {
    // if target is either search btn or the mobile-search input then the input should appear
    if(e.target.id == "search-btn" || e.target.id == "mobile-search-input" || e.target.id == "active-search-btn"){
        mobileSearchOverlay.classList.add("active");
    }
    // but other than those element hide the search bar 
    else{
        mobileSearchOverlay.classList.remove("active");
    }
});
// Desktop Search
document.addEventListener("click", (e) => {
    // if target is either search btn or the desktop-search input then the search form should appear
    if(e.target.id == "desktop-search-text" || e.target.id == "desktop-search-btn" || e.target.id == "desktop-search-input" || e.target.id == "active-desktop-search-btn"){
        desktopSearchOverlay.classList.add("desktop-search-active");
    }
    // but other than these element hide the search bar 
    else{
        desktopSearchOverlay.classList.remove("desktop-search-active");
    }
});


// Mobile Navigation Bar aka sidebar
// show navigation bar if user clicks on the hamburger icon
hamburgerBtn.addEventListener("click", () => {
    navOverlay.classList.add("active-overlay");
});

// hide the navigation bar if user clicks on close btn
closeBtn.addEventListener("click", () => {
    navOverlay.classList.remove("active-overlay");
});


// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
const navbar = document.querySelector(".navbar-desktop");
const navbarSticky = document.querySelector(".fixed-navbar-desktop");

// console.log(navbarSticky);
// Get the offset position of the navbar
let sticky = navbar.offsetTop + navbar.offsetHeight;
sticky = parseInt(sticky);

// console.log(`${navbar.offsetTop} & ${typeof(navbar.offsetTop)}`);
// console.log(`${navbar.style.height} & ${typeof(navbar.style.height)}`);
// console.log(`${sticky} & ${typeof(sticky)}`);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {

        navbar.classList.add("hidden")
        navbarSticky.classList.remove("hidden")


    } else {
        navbarSticky.classList.add("hidden");
        navbar.classList.remove("hidden");
    }
}
