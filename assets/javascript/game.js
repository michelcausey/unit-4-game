var wins = 0
var losses = 0
var targetNumber = $("#target-number")
var totalScore = $("#total-score")
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

$("#crystal-image").on("click", function () {
    console.log("You clicked a crystal")
    console.log(crystalValue)
});

// each crystal gets a value of 12 for the game / resets after win/loss
for (var i = 0; i < 4; i++) {
    var crystalValue = Math.floor(Math.random() * 11) + 1;
    console.log(crystalValue);

    var newImage = $("<img>");
    newImage.attr({
        "id": "crystal-image",
        "src": "./assets/images/crystal1.jpg",
        "data": crystalValue
    })

    $("#crystal-image").append(newImage)

    randomNumberArray.push(crystalValue)
    console.log(randomNumberArray)

    totalScore = (randomNumberArray[0] + randomNumberArray[1] + randomNumberArray[2] + randomNumberArray[3])
    console.log(totalScore)

    $("#total-score").html("Your Total Score is: " + totalScore)
};
}

startGame()

// add "on click" events to crystal between 1 - 12





// player clicks a crystal, & random value is added to SCORE

// player wins if their score equals the random number - alert ("win") - update wins

// player loses if their score exceeds the random number - alert ("lose") - update losses

// re-set the game when a player wins or loses

// at re-set crystal gets a new value assigned, but keep wins/losses displayed