let carouselPosition = 0;
const carousel = document.getElementsByClassName('carousel');
const totalCarousel = carousel.length;


document.
    getElementById('ChangeF')
    .addEventListener("click", function() {
        showFotos();
    }
    );
document.
    getElementById('ChangeV')
    .addEventListener("click", function() {
        showVideos();
    }
    );

function showFotos() {
    
    carousel.classList.remove('carouslVid')
    carousel.classList.documentadd('carosel')
    }

    function showVideos() {
    carousel.classList.remove('carousel')
    carousel.classList.add('carouselVid')
    }


let slidePosition = 0;
const slides = document.getElementsByClassName ('carousel_item');
const totalSlides = slides.length;

document.
    getElementById ('carousel_right')
    .addEventListener("click", function(){
        moveToNextSlide();
    });

document.
    getElementById ('carousel_left')
    .addEventListener("click", function(){
        moveToPrevSlide();
    });


function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible')
        slide.classList.add('carousel_item')
    }

    slides [slidePosition].classList.add('carousel_item--visible')
}

function moveToNextSlide() {
    if (slidePosition == totalSlides -1) {
        slidePosition = 0;
    }
    else {
        slidePosition ++; 
    }
    updateSlidePosition();

}

function moveToPrevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlides -1;
    }
    else {
        slidePosition --; 
    }
    updateSlidePosition();

}




/*
$(getElementById('Bobbycar')).each(function(){
    if ($(getElementById('Bobbycar')).is(":in-viewport")) {
        $(getElementById('Bobbycar')).play();
    } else {
        $(getElementById('Bobbycar')).pause();
    }
})
*/