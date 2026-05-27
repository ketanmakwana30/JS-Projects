let boxEl = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newEl = document.querySelector("#new-btn");
let winnerEl = document.querySelector(".winner-con");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    boxEl.forEach((box) => {
        box.innerText = "";
    });
    winnerEl.innerText = '';
}

newEl.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

boxEl.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

let disableBoxes = () => {
    for (box of boxEl) {
        box.disabled = true;
    }
}

let enableBoxes = () => {
    for (box of boxEl) {
        box.disabled = false;
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxEl[pattern[0]].innerText
        let pos2Val = boxEl[pattern[1]].innerText
        let pos3Val = boxEl[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                winnerEl.innerText = `Winner is ${pos1Val}`;
                disableBoxes();
            }
        }
    }
}
