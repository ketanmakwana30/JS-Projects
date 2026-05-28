let text = document.querySelector("#text");
let letterCount = document.querySelector("#letter-count");
let wordCount = document.querySelector("#word-count");
let sentenceCount = document.querySelector("#sentence-count");
let timeCount = document.querySelector("#time");
let btn = document.querySelector("#clearBtn");

text.addEventListener("input", () => {

    const words = text.value.trim().split(/\s+/).filter(function(word) {
        return word !== "";
    });
    wordCount.textContent = words.length;
    
    const letter = text.value.replaceAll(" ", "");  
    letterCount.textContent = letter.length;

    const sentence  = text.value.split(/[.!?]/).filter(s => s.trim() !== "");  
    sentenceCount.textContent = sentence.length;
    
    const time = Math.ceil(words.length / 100);
    if(words.length <= 100){
        timeCount.textContent = "Less than a min";
    }else {
        timeCount.textContent = `${time -1} Min`;
    }
});

btn.addEventListener("click", () => {
    text.value = "";
     wordCount.textContent = "";
     letterCount.textContent = "";
     sentenceCount.textContent = "";
     timeCount.textContent = "";
    
})