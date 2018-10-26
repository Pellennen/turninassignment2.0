let a = prompt("Vad är arean?");
let b = prompt("Vad är basen?"); // Ger a och b värden ifrån input

function calc(a, b){ // Skapar en funktion som tar värden i a,b 
    let x = Math.pow(a, 2) + Math.pow(b, 2); // Genom Math.pow tar man värdet lika många gånger sig självt som nästankommande visar.
    return Math.round(Math.sqrt(x)); // Returnerar en avrundning ur roten av värdet som blev efter föregående uträkning.
}

alert("Hyptenusans längd = " + calc(a, b)); // Åkallar funktionen och skriver ut värdet som blev returnerat i funktionen.