const inputBox = document.querySelector("#input-box");
const ListConEl = document.querySelector(".list-container");
const btn = document.querySelector("button");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListConEl.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
};

ListConEl.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate() {
    localStorage.setItem("data", ListConEl.innerHTML)
}

function showTask() {
    ListConEl.innerHTML = localStorage.getItem("data");
}
showTask();