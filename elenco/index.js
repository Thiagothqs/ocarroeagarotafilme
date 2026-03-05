// Adds a click listener to the "a" tags on the nav element, that hides the menu after click
const navItems = document.querySelector('nav').children;
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
        console.log("nav");
        showNav();
    });
}

// Adds a click listener to the "body" tag, if it's not inside the "header" element, it hides the menu
const bodyElement = document.querySelector('body');
bodyElement.addEventListener('click', function(event) {
    const header = document.querySelector('header');
    if (!header.contains(event.target)) {
        showNav();
    }
});

// Show or hide the nav menu on the top on mobile devices
function showNav(){
    const element = document.getElementById("div_nav");
    if(element.classList.contains("div-nav")){
        element.classList.remove("div-nav");
        element.classList.add("div-nav-none");
    }
    else{
        element.classList.add("div-nav");
        element.classList.remove("div-nav-none");
    }
}