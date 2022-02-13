const toggleBar = document.querySelector(".toggle-bar");
const navUl = document.querySelector(".nav-ul");

toggleBar.addEventListener('click', ()=> {
    navUl.classList.toggle('mobile-menu');
});