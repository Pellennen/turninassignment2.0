let inputNumber = parseInt(prompt("Choose a number between 1-1000 och calculate its factorial value"));

function randomDice(inputNumber)
{
    let x = 1;
    for (i = 1 ; i < inputNumber+1; i++)
    {
       x = x*i;
       
    }
    return x;
}

alert(randomDice(x));