var buttonViewMore= document.getElementById("dates-button");
var tourWrapper= document.getElementById("tour-wrapper");
var listOfDates= document.getElementById("list-of-dates");
var topMenuTabs=document.getElementById("topMenuTabs");
var cdList= document.getElementById("owl-demo");
var cdItem= document.getElementById("cdItem");

// open the "see more dates" tab in the tour section

if(listOfDates.children[0].children.length>=5){
    buttonViewMore.classList.remove("hide-button");
}

console.log(listOfDates.children[0].children.length>5);




var blackBoxHeight = listOfDates.clientHeight;
var initHeight = "375px";

listOfDates.style.height = initHeight;

buttonViewMore.addEventListener("click", openConcerts);

function openConcerts(){
    if (listOfDates.style.height === initHeight){
        listOfDates.style.height = blackBoxHeight+"px";
        buttonViewMore.innerHTML= "VER MENOS FECHAS";
    }
    else{
        listOfDates.style.height = initHeight;
        buttonViewMore.innerHTML= "VER TODAS LAS FECHAS";
    }
}

$(document).ready(function() {
// cds owl carousel     
    var owl = $("#owl-demo");

    owl.owlCarousel({
        items:2,
        loop:true,
        dots:false,
        autoWidth:true,
        center:true,
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
	        'scrollTop': $target.offset().top - 40
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	})
    
// video carousel     
     $('.owl-carousel').owlCarousel({
        items:2,
        merge:true,
        loop:true,
        margin:20,
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

$(window).scroll(function() {  
    
    let topMenuHeight= document.getElementById("topMenu").offsetHeight;
    let headerSectionHeight= document.getElementById("headerSection").offsetHeight - 50;
    let tourSectionHeight= document.getElementById("tourSection").offsetHeight;
    let cdSectionHeight= document.getElementById("cdsSection").offsetHeight;
    let shopSection= document.getElementById("shopSection").offsetHeight;
    let footerSection= document.getElementById("footerSection").offsetHeight;
    let distanceFromTop= $(this).scrollTop();    
    let totalHeight= $(document).height()
        
//positions at which it shows/hides the fixed top-menu
    
    switch(true){
        case (distanceFromTop<topMenuHeight):
            $('.top-menu').removeClass('top-menu-down');            
            topMenuTabs.children[0].classList.remove("is-active");
            break;   
        case (distanceFromTop>topMenuHeight):
            $('.top-menu').addClass('top-menu-down');
            break;
    }
        
//positions at which the top-menu tabs change colour  
    
    switch(true){
        case (distanceFromTop>topMenuHeight && distanceFromTop<headerSectionHeight):
            activateTab(topMenuTabs.children[0]);
            break;
        case (distanceFromTop<headerSectionHeight+tourSectionHeight && distanceFromTop>headerSectionHeight):
            activateTab(topMenuTabs.children[1]);
            break;
        case (distanceFromTop<totalHeight-shopSection-footerSection && distanceFromTop>headerSectionHeight+tourSectionHeight):
            for (var item of topMenuTabs.children){
                item.classList.remove("is-active");
            }
            break;
        case (distanceFromTop>totalHeight-shopSection-footerSection):
            activateTab(topMenuTabs.children[2]);
            break;
    }
});

//function that changes the top-menu tabs' colours

function activateTab(tabToActivate){
    for (var item of topMenuTabs.children){
        item.classList.remove("is-active");
    }
    tabToActivate.classList.add("is-active");
}
