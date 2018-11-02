let r = prompt("Vad är radien på cirkeln?");

function calc(r) 
{
    return Math.pow(Math.PI,2) * r;
}
function calc2(r)
{
    return Math.PI * Math.pow(r,2);
}
alert(("Omkrets = " + Math.round(calc(r)) + " " + "Radien =" + Math.round(calc2(r))));