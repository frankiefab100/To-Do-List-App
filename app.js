const inputField = document.getElementById("enter-todo");
const todosList = document.querySelector(".todo-items");
const todoBtn = document.getElementById("add-button");

todoBtn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.textContent = inputField.value;
  inputField.value = "";
  todosList.appendChild(item);

  item.addEventListener("click", () => {
    item.classList.toggle("executed");
  });

  item.addEventListener("dblclick", () => {
    todosList.removeChild(item);
  });
});
