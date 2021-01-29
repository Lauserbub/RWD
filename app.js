const carouselImg = document.getElementById('carouselImg');
const carouselVideo = document.getElementById('carouselVideo');

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
    carouselImg.classList.remove('carousel-hidden')
    carouselImg.classList.add('carousel-shown')
    carouselVideo.classList.add('carousel-hidden')
    carouselVideo.classList.remove('carousel-shown')
    }

function showVideos() {
    carouselVideo.classList.remove('carousel-hidden')
    carouselVideo.classList.add('carousel-shown')
    carouselImg.classList.add('carousel-hidden')
    carouselImg.classList.remove('carousel-shown')
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
    for (let index = 0; index < slides.length; index++) {
        const slide = slides[index];
         if (index >= slidePosition && index <= slidePosition + 2) {
            slide.classList.add('carousel_item--visible');
        }
        else {
            slide.classList.remove('carousel_item--visible');
        }
    }
}

function moveToNextSlide() {
    if (slidePosition <= slides.length -4) {
        slidePosition ++; 
        updateSlidePosition();

    }

}

function moveToPrevSlide() {
    if (slidePosition > 0) {
        slidePosition --; 
        updateSlidePosition();
    }
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