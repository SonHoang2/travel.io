const carouselSlideImg = document.querySelector('.carousel-slide__img')
const carouselSlideText = document.querySelectorAll('.carousel-slide-text')

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
    if (images[step] != undefined) {
        if (step < images.length - 1 ) {
            carouselSlideText[step].classList.add('carousel-slide-text--appear')
            carouselSlideText[step + 1].classList.remove('carousel-slide-text--appear')
            step++
        }
        else {
            carouselSlideText[step].classList.add('carousel-slide-text--appear')
            carouselSlideText[step - 1].classList.remove('carousel-slide-text--appear')
            step = 0
        }
    }
    else step = 0
}

preBtn.addEventListener('click', function() {
    carouselSlideImg.src = images[step]
    if (images[step] != undefined) {
        if (step < images.length - 1 ) {
            carouselSlideText[step].classList.add('carousel-slide-text--appear')
            carouselSlideText[step + 1].classList.remove('carousel-slide-text--appear')
            step++
        }
        else {
            carouselSlideText[step].classList.add('carousel-slide-text--appear')
            carouselSlideText[step - 1].classList.remove('carousel-slide-text--appear')
            step = 0
        }
    }
    else step = 0
})

nextBtn.addEventListener('click', function() {
    carouselSlideImg.src = images[step]
    if (images[step] != undefined) {
        if (step < images.length - 1 ) {
            carouselSlideText[step].classList.add('carousel-slide-text--appear')
            carouselSlideText[step + 1].classList.remove('carousel-slide-text--appear')
            step++
        }
        else {
            carouselSlideText[step].classList.add('carousel-slide-text--appear')
            carouselSlideText[step - 1].classList.remove('carousel-slide-text--appear')
            step = 0
        }
    }
    else step = 0
})

slideit()
window.onload = setInterval(slideit, 3000)




