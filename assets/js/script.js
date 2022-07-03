let myHeight = document.getElementById("heightH")
let myWeight = document.getElementById("wght")
let comment = document.getElementById("appendComment")
let calculateIt = document.getElementById("calculateBMI")
let bMI;

calculateIt.addEventListener("click", computedBMI())

function computedBMI(){
    let heightt = myHeight.value;
    let weightt = myWeight.value;
    bMI = parseInt(weightt) / parseInt(((heightt / 100) ** 2)) 
    comment.textContent = bMI
}
