var collection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s','t','u','v','w','x','y','z'];
var wins = 0;
var loses = 0;
var guessLeft = 9;
var guessesFar="";
document.onkeyup = function(event) {
    var userInput = event.key;
    var computerGuess = collection[Math.floor(Math.random() * collection.length)];
    while(guessLeft>0){
    if (userInput === computerGuess) {
        wins++;
        //console.log("wins" + " " + wins);
        document.getElementById("wins").innerHTML= wins;
     }
     guessLeft--;
  document.getElementById("left").innerHTML=guessLeft;
}


 }
