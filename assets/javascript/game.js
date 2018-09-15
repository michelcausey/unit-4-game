
var targetNumber = $("#target-number")
var totalScore = $("#total-score")

// start the game & display a random TARGET NUMBER between 19 - 120

function startGame() {
    targetNumber = Math.floor(Math.random() * 102) + 19
    console.log (targetNumber)
    $("#target-number").html("The target number is: "+ targetNumber)
}

// add "on click" events to each crystal between 1 - 12

$("#crystal-1").on("click", function() {
    var crystalValue1 = Math.floor(Math.random() * 12) + 1
    console.log("the value of crystal 1 is: " + crystalValue1)
});

$("#crystal-2").on("click", function() {
    var crystalValue2 = Math.floor(Math.random() * 12) + 1
    console.log("the value of crystal 2 is: " + crystalValue2)
});

$("#crystal-3").on("click", function() {
    var crystalValue3 = Math.floor(Math.random() * 12) + 1
    console.log("the value of crystal 3 is: " + crystalValue3)
});

$("#crystal-4").on("click", function() {
    var crystalValue4 = Math.floor(Math.random() * 12) + 1
    console.log("the value of crystal 4 is: " + crystalValue4)

});

// player clicks a crystal, & random value is added to SCORE

// player wins if their score equals the random number - alert ("win") - update wins

// player loses if their score exceeds the random number - alert ("lose") - update losses

// re-set the game when a player wins or loses

// at re-set crystal gets a new value assigned, but keep wins/losses displayed

startGame();