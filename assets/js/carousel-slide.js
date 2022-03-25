const carouselSlideImg = document.querySelector('.carousel-slide__img');
const carouselSlideText = document.querySelectorAll('.carousel-slide-text');

// button
const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// counter 
let i = 0;
function slideit(){
    carouselSlideImg.src = carouselSlideImgages[i];
    if (carouselSlideImgages[i] != undefined) {
        if (i < carouselSlideImgages.length - 1 ) {
            carouselSlideText[i].classList.add('carousel-slide-text--appear');
            carouselSlideText[i + 1].classList.remove('carousel-slide-text--appear');
            i++;
        }
        else {
            carouselSlideText[i].classList.add('carousel-slide-text--appear');
            carouselSlideText[i - 1].classList.remove('carousel-slide-text--appear');
            i = 0;
        }
    }
    else i = 0;
}

preBtn.addEventListener('click', function() {
    carouselSlideImg.src = carouselSlideImgages[i];
    if (carouselSlideImgages[i] != undefined) {
        if (i < carouselSlideImgages.length - 1 ) {
            carouselSlideText[i].classList.add('carousel-slide-text--appear');
            carouselSlideText[i + 1].classList.remove('carousel-slide-text--appear');
            i++;
        }
        else {
            carouselSlideText[i].classList.add('carousel-slide-text--appear');
            carouselSlideText[i - 1].classList.remove('carousel-slide-text--appear');
            i = 0;
        }
    }
    else i = 0;
})

nextBtn.addEventListener('click', function() {
    carouselSlideImg.src = carouselSlideImgages[i];
    if (carouselSlideImgages[i] != undefined) {
        if (i < carouselSlideImgages.length - 1 ) {
            carouselSlideText[i].classList.add('carousel-slide-text--appear');
            carouselSlideText[i + 1].classList.remove('carousel-slide-text--appear');
            i++;
        }
        else {
            carouselSlideText[i].classList.add('carousel-slide-text--appear');
            carouselSlideText[i - 1].classList.remove('carousel-slide-text--appear');
            i = 0
        }
    }
    else i = 0;
})

slideit();
window.onload = setInterval(slideit, 5000);




