let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]

let container = document.querySelector(".imageContainer");

function imagesMaker () {
    for(let obrazek of images){
    let div = document.createElement("div"); 
    div.classList.add("picture");
    div.style.backgroundImage=`url("../images/${obrazek}")`;    
    container.appendChild(div); 
    }
} 
imagesMaker ();