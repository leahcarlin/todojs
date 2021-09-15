const todoEl = document.querySelector("#todo");
const todoListEl = document.querySelector(".todo-list")
const submitBtn = document.querySelector("#submit");
const sumTodoEl = document.querySelector("#sum-todo");
const sumDoneEl = document.querySelector("#sum-done");
const sumTotalEl = document.querySelector("#sum-total");
let sumTodo = 0;
let sumDone = 0;
let sumTotal = 0;


function updateCounter(){
  //update counter
  sumTodo += 1;
  sumTotal += 1;
  sumTodoEl.innerText = `To Do: ${sumTodo}`;
  sumTotalEl.innerText = `Total: ${sumTotal}`;
}

submitBtn.addEventListener("click", function(){
  const todoItem = todoEl.value;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "todo-item";
  checkbox.id = "todo-item";

  // create label for checkbox
  const checkboxLabel = document.createElement("label");
  checkboxLabel.className = "todo-label";
  checkboxLabel.htmlFor = "todo-item";
  checkboxLabel.appendChild(document.createTextNode(todoItem));
  const br = document.createElement("br");

  todoListEl.appendChild(checkbox);
  todoListEl.appendChild(checkboxLabel);
  todoListEl.appendChild(br);
  todoEl.value = '';

  updateCounter();
})


/*update counter when box is checked
checkbox.addEventListener("change", function() {
  if (this.checked) {
    todoListEl.classList.remove("todo-list")
    todoListEl.classList.add("todo-list-completed");
  } else {
    todoListEl.classList.remove("todo-list-completed")
    todoListEl.classList.add("todo-list");        
  }
}); */