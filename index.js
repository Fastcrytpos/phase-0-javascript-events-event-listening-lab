function addingEventListener() {
    let btn =document.getElementById("button")
    btn.addEventListener("click",addaddiv);
    console.log("button")
    

}
let x=0;
    
function addaddiv(){
    let divs=document.getElementsByTagName("div")
    
    let div6=document.createElement("div")
    x++;
    lastd=divs.length-1;
    lastdiv=divs[lastd]
    b=lastdiv.textContent;
    div6.textContent = x+b;
    divs[divs.length-1].append(div6);
    console.log(x)

}

addingEventListener();