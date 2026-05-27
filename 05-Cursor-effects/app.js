// let elem = document.querySelectorAll(".elem");
// let elemImg = document.querySelectorAll(".elem img");

// elem.addEventListener("mousemove", (event) => {
//     elemImg.style.left = event.x + "px";       
// });

// elem.addEventListener("mouseenter", (event) => {
//     elemImg.style.opacity = 1;      
// });

// elem.addEventListener("mouseleave", (event) => {
//     elemImg.style.opacity = 0;      
// });


let elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    val.addEventListener("mouseenter", () => {
        val.childNodes[3].style.opacity = 1;
    });

    val.addEventListener("mouseleave", () => {
        val.childNodes[3].style.opacity = 0;
    });

    val.addEventListener("mousemove", (event) => {
        val.childNodes[3].style.left = event.x + "px";
    });

   
});