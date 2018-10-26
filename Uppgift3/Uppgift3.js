let r = prompt("Vad är radien på cirkeln?");

function calc(r) // Första funktionen räknar ut omkretsen på cirkeln.. pi^2 gånger värdet utav r
{
    return Math.pow(Math.PI,2) * r;
}
function calc2(r)// Andra funktionen räknar ut arean.. pi gånger radien gånger sig självt.
{
    return Math.PI * Math.pow(r,2);
}
alert(("Omkrets = " + Math.round(calc(r)) + " " + "Radien =" + Math.round(calc2(r)))); // Skriver ut svar från bägge funktioner.