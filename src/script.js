const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu-bar");

const toggleMenu = () =>{
    hamburgerMenu.classList.toggle("toggle-btn");
    menu.classList.toggle("show");
}

hamburgerMenu.addEventListener("click", toggleMenu);


const move = document.querySelector("#move");
const images = document.querySelectorAll("#img");
let start = 0;

const movement = () =>{
    start++;
    if(start>images.length-1){
        start=0;
    }
    move.style.transform = `translateX(${-start*26}rem)`
}
setInterval(movement, 3000)