// My Script

var menuicon = document.querySelector("#onclick");
var mobilenav = document.querySelector(".mobile-nav");
var cancelicon = document.querySelector(".cancel-icon");

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

var body = document.querySelector('.body')
var mobilenav = document.querySelector(".mobile-nav");

body.onclick = function() {
    mobilenav.style.display = 'none'
    body.style.position = 'cancel'
    menuicon.style.display = 'block'
    cancelicon.style.display = 'none'
}