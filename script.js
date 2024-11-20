// My Script

var menuicon = document.querySelector("#onclick");
var mobilenav = document.querySelector(".mobile-nav");
var cancelicon = document.querySelector(".cancel-icon");
var body = document.querySelector('.body')



menuicon.onclick = function() {
    menuicon.style.display = 'none'
    mobilenav.style.display = 'block'
    cancelicon.style.display = 'block'
}

cancelicon.onclick = function() {
    mobilenav.style.display ='none'
    cancelicon.style.display = 'none'
    menuicon.style.display = 'block'
}

body.onclick = function() {
    mobilenav.style.display = 'none'
    body.style.display = 'cancel'
    menuicon.style.display = 'block'
    cancelicon.style.display = 'none'
}