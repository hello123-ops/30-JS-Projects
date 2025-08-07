const content = document.querySelector(".content-area");
const addBtn = document.querySelector(".Add-btn");
const input = document.querySelector(".input-area");
const listItem = document.querySelector(".content-area li")
const clearAll = document.querySelector(".clearAll");

let addtsk = () => {
    if (input.value === "") {
        alert("Please enter any value!");
    }else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        content.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
}

content.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

addBtn.addEventListener("click", () => {
    addtsk();
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addtsk();
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        input.focus();
    }
});
clearAll.addEventListener("click", () => {
    content.innerHTML = "";
});