// Force scroll (wheel) event into mainContent flex child when in full screen mode

let mainContent = document.querySelector('.mainContent');

function preventDefaultScroll(event){
    event.preventDefault()
}
function enableFlexScroll(event){
    mainContent.scrollTop += event.deltaY;
}

function disableScrolling(){    
    document.addEventListener('wheel', preventDefaultScroll, { passive: false });
    document.addEventListener('wheel', enableFlexScroll);
}

function enableScrolling(){
    document.removeEventListener('wheel', preventDefaultScroll, { passive: false });
    document.removeEventListener('wheel', enableFlexScroll);    
}

function checkScreenWidth() {
    if (window.innerWidth <= 1080) { // Adjust the width as needed
        enableScrolling();
        console.log("enable")
    } else {
        disableScrolling();
        console.log("disable")
    }
}

checkScreenWidth()
window.addEventListener('resize',checkScreenWidth)

// ----- SMOOTH NAVIGATION TO PORTFOLIO SECTIONS WHEN IN FULL SCREEN MODE ----- //

// const root = document.documentElement;
// // Get the computed font size of the root element
// const rem = window.getComputedStyle(root).getPropertyValue('font-size');
// console.log(rem)   

// function offsetScroll(event, sectionId) {
//     event.preventDefault();
//     const yOffset = -parseInt(rem)*6; // Adjust this value to the desired offset on nav bar click
//     const element = document.getElementById(sectionId);
//     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//     window.scrollTo({top: y, behavior: 'smooth'});
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