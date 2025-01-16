const todoValue = document.getElementById("todoText");
const listItems = document.getElementById("list-items");
const addUpdateClick = document.getElementById("AddUpdateClick");
let updateText;
let todoData = JSON.parse(localStorage.getItem("todoData")) | [];

if (!todoData) {
  todoData = [];
}

todoValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addUpdateClick.click();
  }
});

ReadToDoItems();

function ReadToDoItems() {
  // console.log(todoData);
  todoData.forEach((element) => {
    let li = document.createElement("li");
    let style = "";
    if (element.status) {
      style = "style.textDecoration = 'line-through'";
    }

    const todoItems = `<div ${style} ondblclick="CompleteToDoItem(this)"> ${
      element.item
    }
      ${
        style === ""
          ? '<img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="./Assets/pencil.png" />'
          : ""
      }<img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="./Assets/delete.png" />
      </div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);
  });
}

function CreateToDoDate() {
  if (todoValue.value === "") {
    alert("Please Enter your todo text");
    todoValue.focus();
    return;
  }

  let li = document.createElement("li");
  const todoItems = `<div ondblclick="CompleteToDoItem(this)" >${todoValue.value}</div>
  <div>
      <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="./Assets/pencil.png"/>
      <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="./Assets/delete.png"/>
  </div>`;
  li.innerHTML = todoItems;
  listItems.appendChild(li);

  if (!todoData) {
    todoData = [];
  }

  let dataItem = { item: todoValue.value, status: false };
  // console.log(dataItem);
  todoData.push(dataItem);
  localStorage.setItem("todoData", JSON.stringify(todoData));
  todoValue.value = "";
}

function CompleteToDoItem(e) {
  const textElement = e.parentElement.querySelector("div");
  if (textElement.style.textDecoration === "") {
    textElement.style.textDecoration = "line-through";

    todoData.forEach((element) => {
      if (textElement.innerText.trim() === element.item) {
        element.status = true;
      }
    });

    const editButton = e.parentElement.querySelector(".edit");
    if (editButton) {
      editButton.style.display = "none";
    }
  } else {
    textElement.style.textDecoration = "";

    todoData.forEach((element) => {
      if (textElement.innerText.trim() === element.item) {
        element.status = false;
      }
    });

    const editButton = e.parentElement.querySelector(".edit");
    if (editButton) {
      editButton.style.display = "inline";
    }
  }

  // Update localStorage
  localStorage.setItem("todoData", JSON.stringify(todoData));
}

function UpdateOnSelectionItems() {
  updateText.innerText = todoValue.value;

  // Update the todoData array to reflect the changes
  todoData.forEach((element) => {
    if (element.item === updateText.innerText) {
      element.item = todoValue.value;
    }
  });

  localStorage.setItem("todoData", JSON.stringify(todoData));

  addUpdateClick.setAttribute("onclick", "CreateToDoDate()");
  addUpdateClick.setAttribute("src", "./assets/plus.png");

  todoValue.value = "";
}

function UpdateToDoItems(e) {
  if (
    e.parentElement.parentElement.querySelector("div").style.textDecoration ===
    ""
  ) {
    todoValue.value =
      e.parentElement.parentElement.querySelector("div").innerHTML;
    addUpdateClick.setAttribute("onclick", "UpdateOnSelectionItems()");
    addUpdateClick.setAttribute("src", "./assets/refresh.png");
    updateText = e.parentElement.parentElement.querySelector("div");
    todoValue.focus();
  }
}

function DeleteToDoItems(e) {
  const li = e.closest("li");

  const deleteValue = li.querySelector("div").innerText.trim();

  if (confirm("Are you sure?")) {
    li.remove();
    todoData = todoData.filter((element) => element.item !== deleteValue);
    localStorage.setItem("todoData", JSON.stringify(todoData));
    todoValue.focus();
  }
}
