let timer = 60;
let hitRn;
let score = 0;
let totalHit = 0;

function runTimer() {
  let timeStart = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("time").textContent = timer;
    } else {
      clearInterval(timeStart);
      document.getElementById("pbtm").innerHTML = `
      <div class="score-card">
            <h1>Game over</h1>
            <h2>Your Score is ${score}</h2>
            <p>You Hit ${totalHit} Numbers</p>
          </div>
        
       `;
    }
  }, 1000);
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 140; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function getHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitRn;
}

function increaseScore() {
  score += 10;
  document.getElementById("score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let hitNumber = Number(dets.target.textContent);
  if (hitRn === hitNumber) {
    totalHit++;
    increaseScore();
    getHit();
    makeBubble();
  } else {
  }
});

runTimer();
makeBubble();
getHit();
