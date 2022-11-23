let toggleBtn = document.querySelector("#menu-toggle-btn");
let mainNav = document.querySelector("#main-nav");

toggleBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open-menu");
    
})
