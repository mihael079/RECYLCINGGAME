const items = ["Plastic bottle", "Glass bottle", "Aluminum can", "Newspaper", "Cardboard box"];
const recyclingBins = {"Plastic": ["Plastic bottle"], "Glass": ["Glass bottle"], "Metal": ["Aluminum can"], "Paper": ["Newspaper", "Cardboard box"]};
let score = 0;
let totalQuestions = 10;
let correctAnswers = 0;
let wrongAnswers = 0;
let shuffledItems = [];

function startGame() {
    shuffledItems = shuffleArray(items.slice());
    updateItem();
}

function updateItem() {
    if (shuffledItems.length === 0) {
        endGame();
        return;
    }
    const item = shuffledItems.pop();
    document.getElementById("item").innerText = item;
}

function sort(bin) {
    const item = document.getElementById("item").innerText;
    const correctBin = getCorrectBin(item);
    if (bin === correctBin) {
        score++;
        correctAnswers++;
        alert("Correct!");
    } else {
        wrongAnswers++;
        alert(`Wrong! ${item} belongs in the ${correctBin} bin.`);
    }
    totalQuestions--;
    updateItem();
}

function getCorrectBin(item) {
    for (let binType in recyclingBins) {
        if (recyclingBins[binType].includes(item)) {
            return binType;
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function endGame() {
    alert(`Game Over!\n\nTotal score: ${score}/${totalQuestions}\nCorrect answers: ${correctAnswers}\nWrong answers: ${wrongAnswers}`);
    score = 0;
    totalQuestions = 10;
    correctAnswers = 0;
    wrongAnswers = 0;
    shuffledItems = [];
    startGame();
}
