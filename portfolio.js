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