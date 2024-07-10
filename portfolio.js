// console.log(document.querySelector("#aboutNav"))

// document.querySelector("#aboutNav").addEventListener("click", function(event) {
//     offsetScroll(event, "about");
// });
// document.querySelector("#experienceNav").addEventListener("click", function(event) {
//     offsetScroll(event, "experience");
// });
// document.querySelector("#projectsNav").addEventListener("click", function(event) {
//     offsetScroll(event, "projects");
// });

// function offsetScroll(event, sectionId) {
//     event.preventDefault();
//     const yOffset = -120; // Adjust this value to the desired offset
//     const element = document.getElementById(sectionId);
//     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//     window.scrollTo({ top: y, behavior: 'smooth' });
// }

// Force scroll (wheel) event into mainContent flex child when in full screen mode

// let mainContent = document.querySelector('.mainContent');

// function preventDefaultScroll(event){
//     event.preventDefault();
// }

// function enableFlexScroll(event){
//     mainContent.scrollTop += event.deltaY;
// }

// function disableScrolling(){    
//     document.addEventListener('wheel', preventDefaultScroll, { passive: false });
//     document.addEventListener('wheel', enableFlexScroll, { passive: false });
// }

// function enableScrolling(){
//     document.removeEventListener('wheel', preventDefaultScroll, { passive: false });
//     document.removeEventListener('wheel', enableFlexScroll, { passive: false });    
// }

// function checkScreenWidth() {
//     if (window.innerWidth > 1080) { // Adjust the width as needed
//         disableScrolling();
//     } else {
//         enableScrolling();
//     }
// }

// checkScreenWidth()
// window.addEventListener('resize',checkScreenWidth)