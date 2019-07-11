var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
var current = 0;

// clear all images
function reset(){
    for(var i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";
    }
}

// init slideshow
function startSlideShow(){
    reset();
    sliderImages[0].style.display = "block";
}

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// left arrow event listener
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow event listener
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlideShow();