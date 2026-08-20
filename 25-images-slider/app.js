const portfolios = [
  {
    title: "Fashion",
    image: "https://images.pexels.com/photos/9476367/pexels-photo-9476367.jpeg",
  },
  {
    title: "Infrastructure",
    image: "https://images.pexels.com/photos/4345863/pexels-photo-4345863.jpeg",
  },
  {
    title: "Car",
    image: "https://images.pexels.com/photos/11143602/pexels-photo-11143602.jpeg",
  },
  {
    title: "Lion",
    image: "https://images.pexels.com/photos/32196368/pexels-photo-32196368.jpeg",
  },
  {
    title: "Architecture",
    image: "https://images.pexels.com/photos/18613224/pexels-photo-18613224.jpeg",
  },
  {
    title: "Sport",
    image: "https://images.pexels.com/photos/18052791/pexels-photo-18052791.jpeg",
  },
  {
    title: "Agriculture",
    image: "https://images.pexels.com/photos/11678442/pexels-photo-11678442.jpeg",
  },
];

const slider = document.querySelector(".slider");

portfolios.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h2 class="outline-text">${item.title}</h2>
    `;

  slider.appendChild(card);
});
