// =======================
// ELEMENTS
// =======================
const addNoteBtn    = document.getElementById("add-note");
const overlay       = document.getElementById("overlay");
const cardForm      = document.getElementById("card-form");
const imgEl         = document.getElementById("fImg");
const nameEl        = document.getElementById("fName");
const townEl        = document.getElementById("fTown");
const purposeEl     = document.getElementById("fPurpose");
const categoryPills = document.querySelectorAll(".cat-pill");
const closeFormBtn  = document.querySelector(".close-form");
const upBtn         = document.getElementById("upBtn");
const downBtn       = document.getElementById("downBtn");
const stack         = document.getElementById("stack");
const emptyState    = document.getElementById("emptyState");

// =======================
// STATE
// =======================
let selectedCategory = null;

// =======================
// LOCAL STORAGE
// =======================
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =======================
// UPDATE STACK VISUALS
// =======================
function updateStack() {
    const cards = stack.querySelectorAll(".card");

    cards.forEach((card, i) => {
        card.style.position = "absolute";
        card.style.top = "0";
        card.style.left = "0";

        card.style.zIndex = cards.length - i;
        card.style.transform =
            `translateY(${i * 10}px) scale(${1 - i * 0.03})`;

        card.style.opacity = 1;
    });
}

// =======================
// ESCAPE HTML (XSS safe)
// =======================
function esc(str) {
    return String(str)
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;");
}

// =======================
// CREATE CARD ELEMENT
// =======================
function makeCard(task) {
    const card = document.createElement("div");
    card.className = "card";

    // Normalize category name for CSS class: "No Rush" → "NoRush"
    const catClass = task.category.replace(/\s+/g, "");

    card.innerHTML = `
        <div class="avatar-wrap">
            <img src="${esc(task.image)}" alt="${esc(task.name)}">
        </div>
        <div class="card-name">${esc(task.name)}</div>
        <div class="info-row">
            <span class="info-label">Home town</span>
            <span class="info-value">${esc(task.town)}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Purpose</span>
            <span class="info-value">${esc(task.purpose)}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Category</span>
            <span class="cat-badge cat-${esc(catClass)}">${esc(task.category)}</span>
        </div>
        <div class="card-actions">
            <button class="btn-call">📞 Call</button>
            <button class="btn-msg">Message</button>
        </div>
    `;

    // Broken image → show initials
    const img = card.querySelector("img");
    img.onerror = () => {
        const initials = task.name.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase();
        const wrap = card.querySelector(".avatar-wrap");
        wrap.innerHTML = `<div style="
            width:100%;height:100%;display:flex;
            align-items:center;justify-content:center;
            background:#ddd;color:#777;
            font-size:17px;font-weight:700;
            border-radius:50%;
        ">${initials}</div>`;
    };

    return card;
}

// =======================
// RENDER ALL CARDS
// =======================
function showCards() {
    stack.innerHTML = "";

    const tasks = getTasks();

    if (tasks.length === 0) {
        emptyState.classList.add("visible");
        return;
    }

    emptyState.classList.remove("visible");


    tasks.reverse().forEach(task => {
    stack.appendChild(makeCard(task));
});

    updateStack();
}

// =======================
// MODAL OPEN / CLOSE
// =======================
addNoteBtn.addEventListener("click", () => {
    overlay.classList.add("open");
    nameEl.focus();
});

function closeModal() {
    overlay.classList.remove("open");
    cardForm.reset();
    selectedCategory = null;
    categoryPills.forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".field input.error").forEach(el => el.classList.remove("error"));
}

closeFormBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
});

// =======================
// CATEGORY SELECTION
// =======================
categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
        categoryPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        selectedCategory = pill.dataset.cat;
    });
});

// =======================
// FORM SUBMIT
// =======================
cardForm.addEventListener("submit", e => {
    e.preventDefault();

    // Simple inline validation
    let valid = true;

    [imgEl, nameEl, townEl, purposeEl].forEach(el => {
        if (!el.value.trim()) {
            el.classList.add("error");
            el.addEventListener("input", () => el.classList.remove("error"), { once: true });
            if (valid) el.focus();
            valid = false;
        }
    });

    if (!selectedCategory) {
        const cats = document.querySelector(".cats");
        cats.style.outline      = "2px solid #f04040";
        cats.style.borderRadius = "8px";
        setTimeout(() => cats.style.outline = "none", 1500);
        valid = false;
    }

    if (!valid) return;

    // Save task
    const tasks = getTasks();
    tasks.push({
        id:       Date.now(),
        image:    imgEl.value.trim(),
        name:     nameEl.value.trim(),
        town:     townEl.value.trim(),
        purpose:  purposeEl.value.trim(),
        category: selectedCategory
    });
    saveTasks(tasks);

    closeModal();
    showCards();
});

// =======================
// NAVIGATION
// =======================
upBtn.addEventListener("click", () => {
    const first = stack.firstElementChild;
    if (first) { stack.append(first); updateStack(); }
});

downBtn.addEventListener("click", () => {
    const last = stack.lastElementChild;
    if (last) { stack.prepend(last); updateStack(); }
});

// =======================
// INIT
// =======================
showCards();