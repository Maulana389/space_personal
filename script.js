const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");


menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click",()=>{
    menu.classList.remove("active");
}));

const thanks = document.querySelector(".nav-thk");
thanks.addEventListener("click",()=>{
    alert("TERIMA KASIH :)");
})