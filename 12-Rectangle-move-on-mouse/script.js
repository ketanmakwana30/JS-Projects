let rectEl = document.querySelector('#rect');

window.addEventListener("mousemove", (details) => {
    let xValue = gsap.utils.mapRange(0 , window.innerWidth, (150 + rectEl.getBoundingClientRect().width/2), window.innerWidth - (150 + rectEl.getBoundingClientRect().width/2), details.clientX)
    gsap.to('#rect' , {
        left: xValue + "px",
        ease: Power4,   
    });
    
})