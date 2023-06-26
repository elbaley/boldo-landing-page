const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav") 


hamburgerButton.addEventListener('click',()=> {
  navMenu.classList.toggle("active");
})
