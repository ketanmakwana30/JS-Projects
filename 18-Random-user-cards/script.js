function getUser() {
  fetch("https://randomuser.me/api/?results=3")
    .then((rawdata) => rawdata.json()) // Implicit return
    .then((data) => {
      document.querySelector(".cards").innerHTML = "";

      data.results.forEach((user) => {
        // Card
        const card = document.createElement("div");
        card.className =
          "w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900 p-6";

        // Header
        const header = document.createElement("div");
        header.className = "flex items-center gap-4";

        // Avatar
        const avatar = document.createElement("img");
        avatar.className =
          "h-20 w-20 rounded-full border-2 border-slate-700 object-cover";
        avatar.src = user.picture.large; // Fetch API
        avatar.alt = `${user.name.first} Avatar`;

        // User Info
        const userInfo = document.createElement("div");

        // Name
        const name = document.createElement("h1");
        name.className = "text-2xl font-semibold text-white";
        name.textContent = `${user.name.first} ${user.name.last}`;

        // Stats Container
        const stats = document.createElement("div");
        stats.className = "grid grid-cols-2 gap-3 mt-6";

        // Project Card
        const ageCard = document.createElement("div");
        ageCard.className = "rounded-2xl bg-slate-800 p-4 text-center";

        const age = document.createElement("p");
        age.className = "text-xl font-semibold text-white";
        age.textContent = user.dob.age;

        const ageTitle = document.createElement("p");
        ageTitle.className = "text-xs uppercase text-slate-500";
        ageTitle.textContent = "Age";

        // Followers Card
        const genderCard = document.createElement("div");
        genderCard.className = "rounded-2xl bg-slate-800 p-4 text-center";

        const gender = document.createElement("p");
        gender.className = "text-xl font-semibold text-white";
        gender.textContent = user.gender;

        const genderTitle = document.createElement("p");
        genderTitle.className = "text-xs uppercase text-slate-500";
        genderTitle.textContent = "Gender";

        // Buttons Container
        const actions = document.createElement("div");
        actions.className = "mt-6 flex justify-between";

        // Follow Button
        const followBtn = document.createElement("button");
        followBtn.className = "bg-indigo-500 px-5 py-2 rounded-2xl text-white";
        followBtn.textContent = "Follow";

        // Message Button
        const messageBtn = document.createElement("button");
        messageBtn.className =
          "border border-slate-700 px-5 py-2 rounded-2xl text-white";
        messageBtn.textContent = "Message";

        // ---------- Append ----------

        // Header
        userInfo.append(name);
        header.append(avatar, userInfo);

        // Stats
        ageCard.append(ageTitle, age);
        genderCard.append(genderTitle, gender);
        stats.append(ageCard, genderCard);

        // Buttons
        actions.append(followBtn, messageBtn);

        // Card
        card.append(header, stats, actions);

        // Add to page
        document.querySelector(".cards").append(card);
      });
    });
}

getUser();

let refresh = document.querySelector(".refresh-btn");
refresh.addEventListener("click", function () {
  getUser();
});
