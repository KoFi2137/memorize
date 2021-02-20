let images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
let newimages = []
let win=[]

function customize() {
    for (let i=0; i<images.length; i++){
        newimages.push(images[i])
        newimages.push(images[i])
    }
    newimages.sort(()=>Math.random() - 0.5);
}


customize()

let container = document.querySelector(".imageContainer");

function clicker(divArray) {
    let temporaryarray=[]
    for (let smth of divArray){
        smth.addEventListener('click', function(){
            temporaryarray.push(smth);
            smth.classList.remove("pytanie")
            if(temporaryarray.length===2){
                let idelement1=temporaryarray[0].getAttribute("id");
                let idelement2=temporaryarray[1].getAttribute("id");
                if(idelement1=== idelement2){
                   setTimeout(() => {
                    temporaryarray[0].classList.add("invisible")
                    temporaryarray[1].classList.add("invisible") 
                    win.push(temporaryarray[0])
                    win.push(temporaryarray[1])
                    console.log(win.lenght)
                    if(win.lenght===4){
                        alert("WYGRAŁEŚŚŚŚŚŚŚŚŚ69")
                    }
                    temporaryarray.length=0
                    }, 500);
                    
                } else { 
                    setTimeout(()=>{temporaryarray[0].classList.add("pytanie")
                    temporaryarray[1].classList.add("pytanie")
                    temporaryarray.length=0},500)
                    
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

