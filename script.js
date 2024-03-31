function createTodoList() {
  let userInput = document.getElementById("userInput").value.trim();

  if (userInput === "") {
    alert("Please enter a to-do item!");
  } else {
    let todoList = document.createElement("div");

    let todoListInput = document.createElement("Input");
    todoListInput.value = userInput;

    todoListInput.style.border = "none";
    todoListInput.style.fontSize = "15px";
    todoListInput.style.border = "none";

    todoList.append(todoListInput);

    todoList.style.display = "flex";
    todoList.style.gap = "28px";
    todoList.style.justifyContent = "space-evenly";
    todoList.style.padding = "6px";
    todoList.style.borderTop = "1px solid #ddd";

    let todoStoredList = document.getElementById("todoStoredList");
    todoStoredList.append(todoList);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "remove";
    deleteBtn.setAttribute("id", "deleteBtn");
    todoList.append(deleteBtn);

    deleteBtn.onclick = function () {
      todoList.remove();
    };

    let CheckBox = document.createElement("input");
    CheckBox.type = "checkbox";
    todoList.prepend(CheckBox);
  }

  document.getElementById("userInput").value = "";
}
