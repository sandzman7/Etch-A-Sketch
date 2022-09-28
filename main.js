document.addEventListener("DOMContentLoaded", function(){
   createBox(32);
   console.log("hi")
})
   function createBox(size){
    let box = document.querySelector(".box");
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
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
}
}
   