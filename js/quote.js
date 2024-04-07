document.addEventListener("DOMContentLoaded", function(){ 
    var prevSlide = 
        document.getElementById("prevSlide"); 
    var nextSlide = 
        document.getElementById("nextSlide"); 

// Create a carousel instance 
var carouselElement = 
    document.getElementById("carouselExample"); 
var myCarousel = new bootstrap.Carousel(carouselElement); 

// Cycles to the previous item 
prevSlide.addEventListener("click", function(){ 
    myCarousel.prev(); 
    }); 

    // Cycles to the next item 
    nextSlide.addEventListener("click", function(){ 
        myCarousel.next(); 
    }); 

    cycleCarousel.addEventListener("click", function(){ 
        myCarousel.cycle(); 
    }); 

}); 