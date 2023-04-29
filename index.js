let todoList = document.getElementById("todoList");
let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("js-addBtn");
let clearBtn = document.getElementById("clear");

function addItem() {
  let li = document.createElement("li");
  li.innerHTML = todoInput.value;
  todoList.appendChild(li);
  todoInput.value = "";
}

addBtn.addEventListener("click", () => {
  addItem();
});

clearBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
});
