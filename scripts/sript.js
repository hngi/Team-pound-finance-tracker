feather.replace();

const navToggle = document.getElementById("toggle-nav");
const nav = document.getElementById("nav");
const dropDown = document.getElementById("dropdown");
const dropdownMain = document.getElementById("dropdown-main");

navToggle.addEventListener('click', function(){
    nav.classList.toggle("show-nav");
});

dropDown.addEventListener('click', function(e){
    dropdownMain.style.display = "block";

    e.stopPropagation();
});


setTimeout(function () {
    let odiv = document.querySelectorAll("div");
    var oarr = Array.from(odiv);
    let mainodiv = oarr[oarr.length - 1];
    mainodiv.style.display = "none";
}, 500);

