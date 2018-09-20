var wins = 0
var losses = 0
var targetNumber = $("#target-number")
var totalScore = 0
var counter = 0

function startGame() {
    targetNumber = Math.floor(Math.random() * 102) + 19
    console.log("Target Number: " + targetNumber)
    $("#target-number").html("The target number is: " + targetNumber)

$("#crystal-1").on("click", function () {
    console.log("You clicked crystal 1")
    var cry1Score = Math.floor(Math.random() * 12) + 1
    console.log(cry1Score);
    counter += cry1Score;
    console.log(counter);
    totalScore();
});

$("#crystal-2").on("click", function () {
    console.log("You clicked crystal 1")
    var cry2Score = Math.floor(Math.random() * 12) + 1
    console.log(cry2Score);
    counter += cry2Score;
    console.log(counter);
    totalScore();

});

$("#crystal-3").on("click", function () {
    console.log("You clicked crystal 3")
    var cry3Score = Math.floor(Math.random() * 12) + 1
    console.log(cry3Score);
    counter += cry3Score;
    console.log(counter);
    totalScore();
});

$("#crystal-4").on("click", function () {
    console.log("You clicked crystal 4")
    var cry4Score = Math.floor(Math.random() * 12) + 1
    console.log(cry4Score);
    counter += cry4Score;
    console.log(counter);
    totalScore();
});
}

var reset = function (){
    counter = 0
    targetNumber = Math.floor(Math.random() * 102) + 19
    console.log("Target Number: " + targetNumber)
    $("#target-number").html("The target number is: " + targetNumber)
}

var totalScore = function() {
    $("#total-score").html("Your current score is: " + counter);

    if (counter === targetNumber) {
        alert("Woohoo! You Won!");
        reset()
        $("#total-score").html("Your current score is: 0" )
        wins++
        console.log(wins)
        $("#wins").html("Wins: " + wins)
    } else if (counter > targetNumber) {
        alert("Game Over! You Lost")
        reset()
        $("#total-score").html("Your current score is: 0" )
        losses++
        console.log(losses)
        $("#losses").html("Losses: " + losses)
    }

}
startGame()

// reset function that re-sets everything but the wins + losses