let a = prompt("Vad är arean?");
let b = prompt("Vad är basen?"); 

function calc(a, b){ 
    let x = Math.pow(a, 2) + Math.pow(b, 2); 
    return Math.round(Math.sqrt(x)); 
}

alert("Hyptenusans längd = " + calc(a, b));