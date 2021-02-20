let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
let newimages = []
let win=[]

let container = document.querySelector(".imageContainer");
let buttomelement = document.querySelector(".ButtonNewGame");
let boddy = document.querySelector(".lol");

buttomelement.addEventListener ("click",function
    refreshPage(){
        window.location.reload();
    })

function winGame() {
    if(win.length===16){
        container.classList.add("ButtonNewGame");
        buttomelement.classList.remove("ButtonNewGame")
        boddy.classList.add("pornphoto");
  }  
}

function customize() {
    for (let i=0; i<images.length; i++){
        newimages.push(images[i])
        newimages.push(images[i])
    }
    newimages.sort(()=>Math.random() - 0.5);
}


customize()

function clicker(divArray) {
    let temporaryarray=[]
    for (let smth of divArray){
        smth.addEventListener('click', function(){
            smth.classList.add("noclick")
            temporaryarray.push(smth);
            smth.classList.remove("pytanie")
            if(temporaryarray.length===2){
                let idelement1=temporaryarray[0].getAttribute("id");
                let idelement2=temporaryarray[1].getAttribute("id");
                divArray.forEach(element => {
                    element.classList.add("noclick");
                    setTimeout(() => {
                        element.classList.remove("noclick");
                    }, 421);
                });
                if(idelement1=== idelement2){
                   setTimeout(() => {
                    temporaryarray[0].classList.add("invisible")
                    temporaryarray[1].classList.add("invisible") 
                    win.push(temporaryarray[0])
                    win.push(temporaryarray[1])
                    winGame();
                    temporaryarray.length=0
                    }, 420);
                    
                } else { 
                    setTimeout(()=>{temporaryarray[0].classList.add("pytanie")
                    temporaryarray[1].classList.add("pytanie")
                    // do {
                    // setTimeout=disable;     
                    // while (temporaryarray.lenght=2)
                    // }
                    temporaryarray.length=0},469)
                }
            }
        });
    } 
}
function DivMaker() {
    let divArray = []
    for (let img of newimages) {
        let divForImages=document.createElement("div");
        divForImages.classList.add("picture");
        divForImages.style.backgroundImage=`url("../images/${img}")`
        divForImages.classList.add("pytanie");
        divForImages.setAttribute("id",img)
        container.appendChild(divForImages)
        divArray.push(divForImages)
    }
    clicker(divArray)
}
DivMaker()



