const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clear = document.getElementById("clear");

let data = localStorage.getItem("Data");
if (data) {
  listContainer.innerHTML = data;
}

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

clear.addEventListener("click", () => {
  listContainer.innerHTML = "";
  saveData();
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");

    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
