const users = [
    {
        name: "riya sharma",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        bio: "sunsets, playlists & soft vibes 🌇🎧",
    },

    {
        name: "krishna davra",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        bio: "living slow, dreaming big ✨🌙",
    },

    {
        name: "meher arora",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bio: "lost in aesthetics and old songs 🎞🎶",
    },

    {
        name: "naina verma",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
        bio: "brown eyes & midnight skies 🌌🤎",
    },

    {
        name: "tara singh",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        bio: "creating my own fairytale 🕯✨",
    }
];

const container = document.querySelector(".cards-container");

function showUser(arr) {

    container.innerHTML = "";

    arr.forEach(user => {

        // CARD
        const card = document.createElement("div");
        card.classList.add("card");

        // IMAGE
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // BLUR LAYER
        const blurLayer = document.createElement("div");
        blurLayer.classList.add("blurred-layer");
        blurLayer.style.backgroundImage = `url(${user.pic})`;

        // CONTENT
        const content = document.createElement("div");
        content.classList.add("content");

        // H3
        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        // P
        const p = document.createElement("p");
        p.textContent = user.bio;

        // APPEND
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurLayer);
        card.appendChild(content);

        container.appendChild(card);
    });
}

showUser(users);

let search = document.querySelector(".search");
search.addEventListener("input", () => {
    let newUser = users.filter((user) => {
        return user.name.startsWith(search.value)
    });
    showUser(newUser);
})