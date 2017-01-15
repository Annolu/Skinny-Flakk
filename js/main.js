var buttonViewMore= document.getElementById("dates-button");
var tourWrapper= document.getElementById("tour-wrapper");
var listOfDates= document.getElementById("list-of-dates");
var topMenuTabs=document.getElementById("topMenuTabs");

// open the "see more dates" tab in the tour section

buttonViewMore.addEventListener("click", openConcerts)

function openConcerts(){
    
    if(tourWrapper.classList.contains("open-wrapper")){
        tourWrapper.classList.remove("open-wrapper");
        listOfDates.classList.remove("open-list");
        buttonViewMore.innerHTML= "VER TODAS LAS FECHAS";
        
    }else{
        tourWrapper.classList.add("open-wrapper");
        listOfDates.classList.add("open-list");
        buttonViewMore.innerHTML= "VER MENOS FECHAS";
    }
}

$(document).ready(function() {
// cds owl carousel     
    var owl = $("#owl-demo");

    owl.owlCarousel({
        center: true,
        items:2,
        loop:true,
        dots:false,
        autoWidth:true,
        responsive:{
            600:{
                items:2
            }
        }
    })
    
//owl carousel gets linked to the arrows
    
    owl.owlCarousel();
    // Go to the next item
    $('.right-arrow').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.left-arrow').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    
//smooth scroll to internal anchor link    
    
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);        

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	})
    
// video carousel     
    
    $('#owl-carousel-video').owlCarousel({
        items:1,
        nav:true,
        center: true,
        loop:true,
        video:true,
        responsive:{
            600:{
                items:2
            }
        }
    })
});

$(window).scroll(function() {  
    
    let headerSectionHeight= document.getElementById("headerSection").offsetHeight;
    let tourSectionHeight= document.getElementById("tourSection").offsetHeight;
    let cdSectionHeight= document.getElementById("cdsSection").offsetHeight;
    let topMenuHeight= document.getElementById("topMenu").offsetHeight-50;    
    let distanceFromTop= $(this).scrollTop();    
    
    console.log(topMenuHeight)
       
//positions at which it shows/hides the fixed top-menu
    
    switch(true){
        case (distanceFromTop<topMenuHeight):
            $('.top-menu').removeClass('top-menu-down');            
            topMenuTabs.children[0].children[0].classList.remove("is-active");
            break;   
        case (distanceFromTop>topMenuHeight):
            $('.top-menu').addClass('top-menu-down');
            break;
    }
    
//positions at which the top-menu tabs change colour  
    
    switch(true){
        case (distanceFromTop>topMenuHeight && distanceFromTop<headerSectionHeight):
            activateTab(topMenuTabs.children[0].children[0]);
            break;
        case (distanceFromTop<headerSectionHeight+tourSectionHeight &&                              distanceFromTop>headerSectionHeight):
            activateTab(topMenuTabs.children[1].children[0]);
            break;
        case (distanceFromTop>tourSectionHeight+headerSectionHeight):
            activateTab(topMenuTabs.children[2].children[0]);
            break;
    }
});

//function that changes the top-menu tabs' colours

function activateTab(tabToActivate){
    for (var item of topMenuTabs.children){
        item.children[0].classList.remove("is-active");
    }
    tabToActivate.classList.add("is-active");
}
