document.addEventListener("DOMContentLoaded", function(){
    var dropbtn = document.querySelector(".dropbtn");
    var dropmenu = document.querySelector(".dropdown-menu");
    var logo = document.querySelector("nav .logo");
    
    var mobileScreen = window.matchMedia("screen and (max-width: 767px)");
    
    function visibility(mobileScreen) {
        if (mobileScreen.matches) {
            dropmenu.style.display = "none";
            dropbtn.style.display = "block";
        } else {
            dropmenu.style.display = "flex";
            dropbtn.style.display = "none";
        }
    }
    
    visibility(mobileScreen);
    
    mobileScreen.addListener(visibility);
    
    dropbtn.addEventListener("click", function(){
        if (dropmenu.style.display == "none") {
            dropmenu.style.display = "block";
        } else {
            dropmenu.style.display = "none";
        }
    });
});