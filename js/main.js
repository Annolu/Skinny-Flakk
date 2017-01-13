var buttonViewMore= document.getElementById("dates-button");
var tourWrapper= document.getElementById("tour-wrapper");
var listOfDates= document.getElementById("list-of-dates");
var topMenu=document.getElementById("topMenu");
var topMenuNav=document.getElementById("topMenuNav");
var ulLi=document.getElementById("ulLi");

buttonViewMore.addEventListener("click", openConcerts)

function openConcerts(){
    
    if(tourWrapper.classList.contains("open-wrapper")){
        tourWrapper.classList.remove("open-wrapper");
        listOfDates.classList.remove("open-list");
    }else{
        tourWrapper.classList.add("open-wrapper");
        listOfDates.classList.add("open-list");
        buttonViewMore.innerHTML= "VER MENOS FECHAS";
    }
}

$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    autoWidth:true,
    responsive:{
        600:{
            items:2
        }
    }
});

$(document).ready(function(){
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
});


/*
document.addEventListener("scroll", appearToMenu)

function appearToMenu(){
    topMenu.classList.add("top-menu-down")
}*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
         $('.top-menu').addClass('top-menu-down');
    } else {
         $('.top-menu').removeClass('top-menu-down');
    }
    
    if ($(this).scrollTop() > 600){
        go(ulLi.children[1].children[0]);
        console.log($(this).scrollTop())
    }else{
        if ($(this).scrollTop() > 1400){
            go(ulLi.children[2].children[0]); 
        }
    }    
});

function go(dot){
    setTimeout(function(){
        dot.classList.remove("is-active");
        console.log(dot)
        dot.parentElement.nextElementSibling.children[0].classList.add("is-active");
    }, 600);
}