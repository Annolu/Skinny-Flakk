var buttonViewMore= document.getElementById("dates-button");
var tourWrapper= document.getElementById("tour-wrapper");
var listOfDates= document.getElementById("list-of-dates");

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

