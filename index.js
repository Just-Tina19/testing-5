
//Getting access to the class of hamburger and nav-menu//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//addEventListener to both hamburger class and nav-menu class so as to toggle the links// 
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
 
//addEventListener to remove the links once you click on any of the links>
document.querySelectorAll('.nav-link').forEach (n => n.addEventListener ("click", () =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));