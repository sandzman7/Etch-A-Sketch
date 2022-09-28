let color = "black";
let click = false;
document.addEventListener("DOMContentLoaded", function(){
   createBox(16);
   
document.querySelector("body").addEventListener("click", function(e){
if(e.target.tagName != "BUTTON"){
    click = !click;
    let draw = document.querySelector("#draw");
}
else{
    draw.innerHTML = "Draw!"
}
})

   let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBox(size)
    })

})


   function createBox(size){
    let box = document.querySelector(".box");
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
      div.addEventListener("mouseover", colorDiv)
        box.insertAdjacentElement("beforeend", div);
    }
}
   function getSize(){
    let input = prompt("What will the size of the box be?")
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please enter a number";
    }
else if(input < 0 || input > 100){
    message.innerHTML = "Provide a number between 1 and 100"
}
else{
    message.innerHTML = "Go!"
    return input;
}
}
function colorDiv(){
if(click){
    if(color == "random"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
}
else{
    this.style.backgroundColor = 'black'
}
}
}
function setColor(colorChoice){
 color = colorChoice;
}
function resetBox(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}
   