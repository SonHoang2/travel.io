// modal menu
const modalMenu = document.querySelector(".modal-menu");
const modalMenuBody = document.querySelector(".modal-menu__body");
const modalMenuClose = document.querySelector(".modal-menu-close");
const navbarMenu = document.querySelector(".navbar-item-menu");
// mở modal menu
navbarMenu.addEventListener("click", function(){
    modalMenu.classList.add("js-modal-menu");
})
// đóng modal menu
modalMenuClose.addEventListener("click", function(){
    modalMenu.classList.remove("js-modal-menu");
})
modalMenu.addEventListener("click", function(){
    modalMenu.classList.remove("js-modal-menu");
})
modalMenuBody.addEventListener("click", function(event){
    event.stopPropagation();
})

