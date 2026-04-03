let inputEl = document.querySelector("#input");
let btn = document.querySelector("#btn");
let listEl = document.querySelector("#list");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    addTask();
    inputEl.value = " ";
});



function addTask() {
    if (inputEl.value === " ") {
        alert("Kaik nakho");
        return;
    }
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";

    let li = document.createElement("li");

    listEl.appendChild(li).innerText = inputEl.value;
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", ()=>{
        listEl.removeChild(li)
        
    })
}
