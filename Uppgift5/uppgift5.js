
let arr = [];
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;

function randomDice() {
    for (i = 0; i < 1000; i++) {
        arr[i] = Math.floor((Math.random() * 6) + 1); 
    }
    
}

function print()

{

    for (i = 0 ; i < 1000; i++)
    {
        if (arr[i] == 1) {
         one += 1;
        } else if (arr[i] == 2)
        { 
            two += 1;
        } else if (arr[i] == 3)
        {
            three += 1;
        } else if (arr[i] == 4)
        {
            four += 1;
        } else if (arr[i] == 5)
        {
            five += 1; 
        } else if (arr[i] == 6)
        {
            six += 1;
        }
        
    }
    console.log("Ones: " + one / 10 + "% Twos: " + two / 10 +"% threes: " + three / 10 +  "% fours: " + four / 10 + "% fives: " + five / 10 +  "% sixes: " + six / 10 + "%");
}
randomDice();
print();
