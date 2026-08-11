const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
let timeout;
let rotate = 0;
let diffrot = 0;

function firstPageAnim() {
  let tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      duration: 2,
      delay: -1,
      ease: Expo.easeInOut,
      stragger: 0.2,
    })
    .from("#hero-footer", {
      y: -10,
      delay: -1,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    });
}

function spheroidCircle() {
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);
    let xscale = gsap.utils.clamp(0.75, 1.2, dets.clientX - xprev);
    let yscale = gsap.utils.clamp(0.75, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector("#minicircle").style.transform =
        `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", (dets) => {
    let circle = document.querySelector("#minicircle");
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
function secondPageAnim() {
  document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", (dets) => {
      let diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power1,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot),
      });
    });

    elem.addEventListener("mouseleave", (dets) => {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,

        ease: Power1,
      });
    });
  });
}

firstPageAnim();
spheroidCircle();
circleMouseFollower();

secondPageAnim();
