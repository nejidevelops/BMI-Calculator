let myHeight = document.getElementById("heightH")
let myWeight = document.getElementById("wght")
let comment = document.getElementById("appendComment")
let calculateIt = document.getElementById("calculateB")
let bMI;

calculateIt.addEventListener("click", computedB)

function computedB(){
    let heightt = myHeight.value;
    let weightt = myWeight.value;
    bMI = (weightt) / ((heightt ** 2)/10000) 
    comment.textContent = bMI.toFixed(2)

}
