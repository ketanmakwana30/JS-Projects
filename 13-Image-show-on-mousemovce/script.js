let center = document.querySelector("#center")

const throttleFunction = (func, delay) => {
    let prev = 0;

    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};


center.addEventListener("mousemove", throttleFunction((dets) => {
    let div = document.createElement("div");    
    div.classList.add('imagediv');

    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    let img = document.createElement("img");
    img.setAttribute("src", "https://thumbs.dreamstime.com/b/man-standing-top-mountain-beautiful-view-high-mountains-background-blue-sky-white-clouds-sunshine-autumn-331558852.jpg")
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img , {
        y: "0",
        ease:Power1,
        duration: 0.6,
    })

    gsap.to(img , {
        delay: .6,
        y: "100%",
        ease:Power1,
        duration: .2,
    });

    setTimeout(() => {
        div.remove();
    }, 1500);

}, 0.1));