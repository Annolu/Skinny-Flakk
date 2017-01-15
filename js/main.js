var buttonViewMore= document.getElementById("dates-button");
var tourWrapper= document.getElementById("tour-wrapper");
var listOfDates= document.getElementById("list-of-dates");
var topMenuTabs=document.getElementById("topMenuTabs");
var headerSectionHeight= document.getElementById("headerSection").offsetHeight;
var tourSectionHeight= document.getElementById("tourSection").offsetHeight;
var cdSectionHeight= document.getElementById("cdsSection").offsetHeight;
var topMenuHeight= document.getElementById("topMenu").offsetHeight;



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
// owl carousel    
    
    var owl = $("#owl-demo");

    $('.owl-carousel').owlCarousel({
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
    });  
    
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
	});
    
// video carousel     
    $('.owl-carousel2').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })

});

//positions at which the top-menu tabs change colour and show/hide fixed top-menu

$(window).scroll(function() {  
    
    var distanceFromTop= $(this).scrollTop();    
    
    var offsetHeight= headerSection.offsetHeight;    
    
    switch(true){
        case (distanceFromTop<topMenuHeight):
            $('.top-menu').removeClass('top-menu-down');            
            topMenuTabs.children[0].children[0].classList.remove("is-active");
            break;          

        case (distanceFromTop<headerSectionHeight && distanceFromTop>topMenuHeight):
            $('.top-menu').addClass('top-menu-down');            
            go(topMenuTabs.children[0].children[0]);
            break;
            
        case (distanceFromTop<headerSectionHeight+tourSectionHeight &&                        distanceFromTop>headerSectionHeight):
            go(topMenuTabs.children[1].children[0]);
            break;
            
        case (distanceFromTop>tourSectionHeight+headerSectionHeight):
            go(topMenuTabs.children[2].children[0]);
            break;
    }
});

//function that changes the top-menu tabs' colours

function go(tabToActivate){
    setTimeout(function(){
            for (var item of topMenuTabs.children){
                item.children[0].classList.remove("is-active");
            }
        tabToActivate.classList.add("is-active");
    }, 200);
}
