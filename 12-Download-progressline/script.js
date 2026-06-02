let progressBar = document.querySelector(".progress-bar");
let percentText = document.querySelector(".percent");
let startBtn = document.querySelector(".start-btn");

let count = 0;
startBtn.addEventListener("click", () => {
    let progressEl = setInterval(() => {
            if (count <= 100) {
            progressBar.style.width = ` ${count}%`;
            percentText.textContent = ` ${count}%`;
            count++;
        } else {
            clearInterval(progressEl);
            percentText.textContent = `Download Complete !`;
        }
        }, 50);
})