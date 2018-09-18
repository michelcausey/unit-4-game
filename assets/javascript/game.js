var wins = 0
var losses = 0
var targetNumber = $("#target-number")
var totalScore = 0
var wins = $("#wins")
var losses = $("#losses")

// an array to hold our crystal values
var randomNumberArray = []

// start the game & display a random TARGET NUMBER between 19 - 120
// used 102 + 19 because FLOOR = 0 + 19
// used 102 + 19 to get highest number at 120

function startGame(){
targetNumber = Math.floor(Math.random() * 102) + 19
console.log("Target Number: " + targetNumber)
$("#target-number").html("The target number is: " + targetNumber)

$("#crystal-1").on("click", function () {
    console.log("You clicked crystal 1")
    var cry1Score = Math.floor(Math.random() * 12) + 1
    console.log (cry1Score)
});

$("#crystal-2").on("click", function () {
    console.log("You clicked crystal 2")
});

$("#crystal-3").on("click", function () {
    console.log("You clicked crystal 3")
});

$("#crystal-4").on("click", function () {
    console.log("You clicked crystal 4")
});

};

startGame()

// add "on click" events to crystal between 1 - 12





// player clicks a crystal, & random value is added to SCORE

// player wins if their score equals the random number - alert ("win") - update wins

// player loses if their score exceeds the random number - alert ("lose") - update losses

// re-set the game when a player wins or loses

// at re-set crystal gets a new value assigned, but keep wins/losses displayed