const path = "assets/img/";

const rockImg = path + "rock.png";
const paperImg = path + "paper.png";
const scissorsImg = path + "scissors.png";
const lizardImg = path + "lizard.png";
const spockImg = path + "spock.png";

let playerChoice = "";
let computerChoice = "";

function change(choice) {
    playerChoice = choice;
    document.getElementById("pplayer").src = `assets/img/${choice}.png`;
}

function changeComputer() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    document.getElementById("pnone").src = `assets/img/${computerChoice}.png`;
}

function results() {
    const resultElement = document.getElementById("result");
    const playerPointsElement = document.getElementById("pp");
    const computerPointsElement = document.getElementById("np");

    if (playerChoice === computerChoice) {
        resultElement.innerHTML = "Result: <strong style='font-size: 24px;'>It's a tie!</strong>";
    } else if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
        resultElement.innerHTML = "Result: <strong style='font-size: 24px;'>You win!</strong>";
        let points = parseInt(playerPointsElement.textContent.split(": ")[1]);
        points++;
        playerPointsElement.innerHTML = `Points: <strong style='font-size: 24px;'>${points}</strong>`;
    } else {
        resultElement.innerHTML = "Result: <strong style='font-size: 24px;'>Computer wins!</strong>";
        let points = parseInt(computerPointsElement.textContent.split(": ")[1]);
        points++;
        computerPointsElement.innerHTML = `Points: <strong style='font-size: 24px;'>${points}</strong>`;
    }
}

function play() {
    document.getElementById("result").textContent = "Result: ";
    const playerChoiceElement = document.getElementById("pplayer");
    playerChoiceName = playerChoiceElement.src.substring(playerChoiceElement.src.lastIndexOf("/") + 1).replace(".png", "");
    setTimeout(() => {
        changeComputer("rock");
    }, 200);

    setTimeout(() => {
        changeComputer("paper");
    }, 400);

    setTimeout(() => {
        changeComputer("scissors");
    }, 600);

    setTimeout(() => {
        changeComputer("lizard");
    }, 800);

    setTimeout(() => {
        changeComputer("spock");
    }, 1000);

    setTimeout(() => {
        changeComputer();
        results();
    }, 1200);
}