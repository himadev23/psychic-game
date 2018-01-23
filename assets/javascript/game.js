var collection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessLeft = 9;
var guessesFar = "";
var computerGuess;

function random() {
    computerGuess= collection[Math.floor(Math.random() * collection.length)];
}

document.onkeyup = function(event) {
    var userInput = event.key;
    random();

    if (userInput === computerGuess) {
        wins++;
        guessLeft = 9;
        guessesFar = "";
        random();
        } else {
        guessLeft--;
        guessesFar = guessesFar + userInput + ",";
        if (guessLeft <0) {
            loses++;
            guessLeft = 9;
            guessesFar="";
            random();

        }
         

    }
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("left").innerHTML = guessLeft;
    
    document.getElementById("guesses").innerHTML = guessesFar;
    document.getElementById("loses").innerHTML = loses;
}

