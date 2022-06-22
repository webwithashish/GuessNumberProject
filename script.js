"use strict";
/*
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 14;
// document.querySelector(".score").textContent = "10";
// document.querySelector(".guess").value = 9;

// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = "⛔No Number!";
    } else if (guess === 41) {
        document.querySelector(".message").textContent = "Hello Ashish !";
    }
});
*/

/*
const computer_number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = computer_number;
console.warn(computer_number);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    if (!guess) {
        document.querySelector(".message").textContent = "⛔No Number !";
        console.log(guess);
    } else if (guess === computer_number) {
        document.querySelector(".message").textContent = "🥳🎉Correct Number";
    } else {
        document.querySelector(".message").textContent = "❌Wrong Number ❗";
    }
});

*/

// computer number
let computer_number = Math.trunc(Math.random() * 20) + 1;
console.log(computer_number);

// setting the player score and highscore values
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

// check button click event listener
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // when there is no input
    if (!guess) {
        displayMessage("⛔No Number!");
    }
    // when the player wins the game
    else if (guess === computer_number) {
        displayMessage("🎉🥳Correct Number");
        document.querySelector(".number").textContent = computer_number;
        highscore = score > highscore ? score : highscore;
        document.querySelector(".highscore").textContent = highscore;
        // changing the css styles for win condition
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
    }
    // when the guess is different
    else if (guess !== computer_number) {
        if (score > 1) {
            displayMessage(
                guess < computer_number ? "⬇️Too Low !" : "⬆️Too high !"
            );
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥You Lost the Game !");
            document.querySelector(".score").textContent = 0;
        }
    }
    // // when the guess is low !
    // else if (guess < computer_number) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "⬇️Too Low !";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent =
    //             "💥You Lost the Game !";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
    // // when the guess is high!
    // else if (guess > computer_number) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "⬆️Too high !";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent =
    //             "💥You Lost the Game !";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

// play again button intializing

document.querySelector(".again").addEventListener("click", function () {
    // console.log("again event called");
    // reset the score
    score = 10;
    document.querySelector(".score").textContent = score;
    // reset the computerNumber
    computer_number = Math.trunc(Math.random() * 20) + 1;
    console.log(computer_number);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
});
