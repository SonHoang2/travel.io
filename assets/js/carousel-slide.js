const carouselSlideImg = document.querySelector('.carousel-slide__img')
const carouselSlideTextH5 = document.querySelector('.carousel-slide-text__h5')
const carouselSlideTextH1 = document.querySelector('.carousel-slide-text__h1')
const carouselSlideTextp = document.querySelector('.carousel-slide-text__p')

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
        carouselSlideTextH5.innerText = 'From alps'
        carouselSlideTextH1.innerText = 'Snow Adventure'
        step++
    }
    else {
        carouselSlideTextH5.innerText = 'Enjoy Your'
        carouselSlideTextH1.innerText = 'Winter Vacations'
        step = 0
    }
}

preBtn.addEventListener('click', function() {
    if (step > images.length - 1 ) {
        step = 0
        carouselSlideImg.src = images[step]
        carouselSlideTextH5.innerText = 'Enjoy Your'
        carouselSlideTextH1.innerText = 'Winter Vacations'
    }
    else {
        carouselSlideImg.src = images[step++]
        carouselSlideTextH5.innerText = 'From alps'
        carouselSlideTextH1.innerText = 'Snow Adventure'
    }
})

nextBtn.addEventListener('click', function() {
    if (step > images.length - 1 ) {
        step = 0
        carouselSlideImg.src = images[step]
        carouselSlideTextH5.innerText = 'Enjoy Your'
        carouselSlideTextH1.innerText = 'Winter Vacations'
    }
    else {
        carouselSlideImg.src = images[step++]
        carouselSlideTextH5.innerText = 'From alps'
        carouselSlideTextH1.innerText = 'Snow Adventure'
    }
})

slideit()
window.onload = setInterval(slideit, 5000)




