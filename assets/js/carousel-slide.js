const carouselSlideImg = document.querySelector('.carousel-slide__img')
let images = [
    'assets/img/img change/skiing-slider-img-1.jpg',
    'assets/img/img change/skiing-slider-img-2.jpg'
]
// button
const preBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

// counter 
let step = 0;
function slideit(){
    carouselSlideImg.src = images[step]
    if (step < images.length - 1 ) {
        step++
    }
    else step = 0
}

preBtn.addEventListener('click', function() {
    if (step > images.length - 1 ) {
        step = 0
        carouselSlideImg.src = images[step]
    }
    else carouselSlideImg.src = images[step++]
})

nextBtn.addEventListener('click', function() {
    if (step > images.length - 1 ) {
        step = 0
        carouselSlideImg.src = images[step]
    }
    else carouselSlideImg.src = images[step++]
})

slideit()
window.onload = setInterval(slideit, 3000)




