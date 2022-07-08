let myHeight = document.getElementById("heightH")
let myWeight = document.getElementById("wght")
let computed = document.getElementById("appendComputed")
let calculateIt = document.getElementById("calculateB")
let statusBMI = document.getElementById("appendComment")
let clearAndAwait = document.querySelectorAll("input")
let validator = document.getElementById("validationNotifier")
let bMI;

calculateIt.addEventListener("click", computedB)

function computedB(){
    let heightt = myHeight.value;
    let weightt = myWeight.value;
    if(isNaN(heightt) || isNaN(weightt)){
        validator.textContent = "Only numeric values are allowed"
    }
    
    bMI = (weightt) / ((heightt ** 2)/10000) 
    computed.textContent = bMI.toFixed(2)

    if(bMI > 24.9){
        statusBMI.textContent = "Your's is an over weight"
    }
    else if(bMI > 18.6){
        statusBMI.textContent = "Your's is a normal range"
    }
    else if(bMI < 18.6){
        statusBMI.textContent = "Your's is an under weight ukule matunda"
    }

    clearAndAwait.forEach(input => input.value = "")
}

