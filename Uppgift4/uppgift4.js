let r = prompt("Vad är radien på sfären?"); // Fungerar liknande som tidigare uppgift fast med annan formel så utelämnar kommentarer. 

function volym(r) {
    return Math.pow(Math.PI,4) * Math.pow(r,3) / 3;
}
function area(r) {
    return Math.pow(Math.PI,4) * Math.pow(r,2);
}
alert("Volym på cirkel är:" + " " + Math.round(volym(r)) + "Arean på sfären är:" + " " + 
Math.round(area(r)));