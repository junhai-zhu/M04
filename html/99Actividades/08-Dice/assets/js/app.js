function focus() {
    document.getElementById("number").focus();
}

function checkValues() {
    var numberInput = document.getElementById("number").value;
    if (numberInput === "") {
        document.getElementById("error").innerHTML = "<strong>Please enter a number</strong>";
    } else {
        var number = parseInt(numberInput);
        if (isNaN(number) || number < 1) {
            document.getElementById("error").innerHTML = "<strong>Please enter a number bigger than 0</strong>";
        } else {
            document.getElementById("error").innerHTML = "";
            setTimeout(() => {
                randomAn(number)
            }, 200);

            setTimeout(() => {
                randomAn(number)
            }, 400);

            setTimeout(() => {
                randomAn(number)
            }, 600);

            setTimeout(() => {
                randomAn(number)
            }, 800);

            setTimeout(() => {
                randomAn(number)
            }, 1000);

            setTimeout(() => {
                generateDice(number);
            }, 1200);
        }
    }

}

function generateDice(number) {
    const dice = [];
    for (let index = 0; index < number; index++) {
        const randomIndex = Math.floor(Math.random() * 6) + 1;
        let a = dice.push(randomIndex);
    }
    showDice(dice);
    showNumbers(dice);
    showTotal(dice);
}
function showDice(dice) {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    for (let index = 0; index < dice.length; index++) {
        const resultsContainer = document.getElementById("results");
        const imgElement = document.createElement("img");
        imgElement.src = 'assets/img/dice' + dice[index] + '.jpg';
        imgElement.alt = '';
        resultsContainer.appendChild(imgElement);
    }
}
function showNumbers(dice){
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML += "<h1> Results</h1>The values are: ";
    for (let index = 0; index < dice.length; index++) {
        resultsContainer.innerHTML += dice[index]+" ";
    }
}
function showTotal(dice){
    var total =0;
    var resultsContainer = document.getElementById("results");
    for (let index = 0; index < dice.length; index++) {
        total =total + dice[index];
    }
    resultsContainer.innerHTML += "<br>Total: " + total;
}

function randomAn(number) {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    for (let index = 0; index < number; index++) {
        const resultsContainer = document.getElementById("results");
        const randomIndex = Math.floor(Math.random() * 6) + 1;
        const imgElement = document.createElement("img");
        imgElement.src = 'assets/img/dice' + randomIndex + '.jpg';
        imgElement.alt = '';
        resultsContainer.appendChild(imgElement);
    }
}