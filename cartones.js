const bingoNumbers = Array.from({ length: 75 }, (_, i) => i + 1);
let remainingNumbers = [...bingoNumbers];

console.log("bola")
function getRandomNumber() {
    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    return remainingNumbers.splice(randomIndex, 1)[0];
}

function createBingoBoard() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let number = getRandomNumber();
            const ball = document.createElement("div");
            ball.className = "ball";
            ball.id = number;
            ball.textContent = number;
            document.getElementById("bingo").appendChild(ball);
        }
    }
}

function startGame() {
    createBingoBoard();
    document.getElementById("start").disabled = true;
}
document.getElementById("bingo").addEventListener("click", function (event) {
    if (event.target.classList.contains("ball")) {
        event.target.classList.toggle("selecionado");
    }
});


document.getElementById("start").addEventListener("click", startGame);