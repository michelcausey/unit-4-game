var wins = 0
var losses = 0
var targetNumber = $("#target-number")
var totalScore = 0

var wins = $("#wins")
var losses = $("#losses")

// an array to hold our crystal values
var randomNumberArray = []

function startGame(){
targetNumber = Math.floor(Math.random() * 102) + 19
console.log("Target Number: " + targetNumber)
$("#target-number").html("The target number is: " + targetNumber)

$("#crystal-1").on("click", function () {
    console.log("You clicked crystal 1")
    var cry1Score = Math.floor(Math.random() * 12) + 1
    randomNumberArray.push(cry1Score)
    console.log (cry1Score)
    console.log(randomNumberArray)
});

$("#crystal-2").on("click", function () {
    console.log("You clicked crystal 2")
    var cry2Score = Math.floor(Math.random() * 12) + 1
    console.log (cry2Score)
    randomNumberArray.push(cry2Score)
    console.log(randomNumberArray)
});

$("#crystal-3").on("click", function () {
    console.log("You clicked crystal 3")
    var cry3Score = Math.floor(Math.random() * 12) + 1
    console.log (cry3Score)
    randomNumberArray.push(cry3Score)
    console.log(randomNumberArray)
});

$("#crystal-4").on("click", function () {
    console.log("You clicked crystal 4")
    var cry4Score = Math.floor(Math.random() * 12) + 1
    console.log (cry4Score)
    randomNumberArray.push(cry4Score)
    console.log(randomNumberArray)
});

$("#total-score").html("Your total score is: " + totalScore)
console.log(totalScore)
};

startGame()



// player clicks a crystal, & random value is added to SCORE

// player wins if their score equals the random number - alert ("win") - update wins

if (totalScore === targetNumber) {
    wins++;
    alert("You Win!")
    $("#wins").html("Games Won: " + wins)
} else if (totalScore >= targetNumber) {
    losses++;
    alert("Game Over - You Lose")
    $("#losses").html("Games Lost: " + losses)

}

// player loses if their score exceeds the random number - alert ("lose") - update losses

// re-set the game when a player wins or loses

// at re-set crystal gets a new value assigned, but keep wins/losses displayed