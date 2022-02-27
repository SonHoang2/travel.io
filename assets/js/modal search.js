// modal search
const iconSearch = document.querySelector(".navbar-item-search") 
const modalSearch = document.querySelector(".modal-search")
const modalSearchBody = document.querySelector(".modal-search__body")
// mở modal search
iconSearch.addEventListener('click', function() {
    modalSearch.classList.add('js-modal-search')
})
// đóng modal search 
modalSearch.addEventListener('click', function (){
    modalSearch.classList.remove('js-modal-search')
})
modalSearchBody.addEventListener('click', function(event){
    event.stopPropagation()
})
