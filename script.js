function rollDice() {
    var dice = document.getElementById('dice'); //This line retrieves an HTML element with the id "dice" from the webpage and stores it in a variable named dice
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomNumber;
}
