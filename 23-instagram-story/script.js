let arr = [
  {
    dp: "https://images.pexels.com/photos/33503163/pexels-photo-33503163.jpeg",
    story: "https://images.pexels.com/photos/19936793/pexels-photo-19936793.jpeg",
  },
  {
    dp: "https://images.pexels.com/photos/38486331/pexels-photo-38486331.jpeg",
    story: "https://images.pexels.com/photos/8980241/pexels-photo-8980241.jpeg",
  },
  {
    dp: "https://images.pexels.com/photos/20025518/pexels-photo-20025518.jpeg",
    story: "https://images.pexels.com/photos/14623920/pexels-photo-14623920.jpeg",
  },
  {
    dp: "https://images.pexels.com/photos/34805390/pexels-photo-34805390.jpeg",
    story: "https://images.pexels.com/photos/34805409/pexels-photo-34805409.jpeg",
  },
  {
    dp: "https://images.pexels.com/photos/32887387/pexels-photo-32887387.jpeg",
    story: "https://images.pexels.com/photos/20994167/pexels-photo-20994167.jpeg",
  },
  {
    dp: "https://images.pexels.com/photos/31969044/pexels-photo-31969044.jpeg",
    story: "https://images.pexels.com/photos/4936572/pexels-photo-4936572.jpeg",
  },
  {
    dp: "https://images.pexels.com/photos/8019183/pexels-photo-8019183.jpeg",
    story: "https://images.pexels.com/photos/9347720/pexels-photo-9347720.jpeg",
  },
];

let clutter = "";
let stories = document.querySelector("#stories");
let fullScreen = document.querySelector("#full-screen");

arr.forEach(function (elem, idx) {
  clutter += `
        <div class="story">
          <div class="border">
            <img
            id="${idx}"
              src="${elem.dp}"
            />
          </div>
        </div>`;
});

stories.innerHTML = clutter;
stories.addEventListener("click", function (dets) {
  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    fullScreen.style.display = "none";
  }, 2500);
});
