document.addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });

// // Disable touch scrolling
// document.addEventListener('touchmove', function(event) {
//     event.preventDefault();
// }, { passive: false });

// Disable keydown scrolling (arrow keys, spacebar, etc.)
document.addEventListener('keydown', function(event) {
    // Check for the keys that can scroll the page
    const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
    if (keys.includes(event.keyCode)) {
        event.preventDefault();
    }
});


// Code to force the scroll input into the mainContent flexbox
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.mainContent');

    document.addEventListener('wheel', function(event) {
    
        mainContent.scrollTop += event.deltaY;
    });
});

// function checkScreenWidth() {
//     if (window.innerWidth <= 800) { // Adjust the width as needed
//         enableScrolling();
//     } else {
//         disableScrolling();
//     }
// }




// add hover effect method to all hoverElements
// let hoverElements = document.getElementsByClassName('hoverEffect')

// console.log(hoverElements)
// console.log(hoverElements.length)

// function hoverIn(event){
//     event.target.style.backgroundColor = "rgba(240,240,240,.25)";
// }

// function hoverOut(event){
//     event.target.style.backgroundColor = ""
// }

// for (let i=0; i<hoverElements.length; i++){
//     hoverElements[i].addEventListener("mouseover",hoverIn)
//     hoverElements[i].addEventListener("mouseout",hoverOut) 
// }