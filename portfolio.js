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