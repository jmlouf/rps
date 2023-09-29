var options = ["R", "P", "S"];

window.alert("Let's play a game...");

while (true) {
    play();

    if (!confirm("Play again?")) {
        window.alert("Thanks for playing!");
        break;
    }
}

function play() {

    // Existing game logic.

    var userChoice = prompt("Enter R, P, or S");
    var randomIDX = Math.floor(Math.random() * options.length);
    var computerChoice = options[randomIDX];
    console.log(computerChoice);

    if (userChoice === computerChoice) {
        window.alert("It's a Draw!");
    } else if (userChoice === "R" && computerChoice === "P") {
        window.alert("You Lose!");
    } else if (userChoice === "R" && computerChoice === "S") {
        window.alert("You Win!");
    } else if (userChoice === "P" && computerChoice === "R") {
        window.alert("You Win!");
    } else if (userChoice === "P" && computerChoice === "S") {
        window.alert("You Lose!");
    } else if (userChoice === "S" && computerChoice === "R") {
        window.alert("You Lose!");
    } else if (userChoice === "S" && computerChoice === "P") {
        window.alert("You Win!");
    }
}

play();