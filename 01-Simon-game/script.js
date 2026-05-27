let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let btn = document.querySelectorAll(".btn")

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 200);
}


function levelUp() {
    userSeq = [];
    level++;
    h3.innerHTML = `Level ${level}`;

    let randInx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);

};

function checkAns(idx) {
    // console.log("Current Level:", level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `<b> GAME OVER! Your Score was ${level}</b> <br/> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
};

function btnPress () {
    let btn = this;
    userFlash(btn);    

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0
};