let myHeight = document.getElementById("heightH")
let myWeight = document.getElementById("wght")
let computed = document.getElementById("appendComputed")
let calculateIt = document.getElementById("calculateB")
let statusBMI = document.getElementById("appendComment")
let bMI;

calculateIt.addEventListener("click", computedB)

function computedB(){
    let heightt = myHeight.value;
    let weightt = myWeight.value;
    bMI = (weightt) / ((heightt ** 2)/10000) 
    computed.textContent = bMI.toFixed(2)

    if(computed > 24.9){
        statusBMI.textContent = "Your's is over weight"
    }
    else if(computed >= 18.6 && computed <= 24.9){
        statusBMI.textContent = "Your's is a normal range"
    }
    else{
        statusBMI.textContent = "Your's is under weight"
    }
}

