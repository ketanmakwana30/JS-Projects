const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
    let randomColor = getGandomColor(); 
    h1.innerText = randomColor ;
    box.style.backgroundColor = randomColor;
});
x


function getGandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
