const todoEl = document.querySelector("#todo");
const todoListEl = document.querySelector(".todo-list")
const submitBtn = document.querySelector("#submit");
const sumTodoEl = document.querySelector("sum-todo");
const sumDoneEl = document.querySelector("sum-done");
const sumTotalEl = document.querySelector("sum-total");

//functions

function addToList(){
  const todoItem = todoEl.value;
  const newInput = document.createElement("input");
  newInput.type = "checkbox";
  newInput.name = "todo-item";
  newInput.id = "todo-item";
  
  // create label for checkbox
  const label = document.createElement("label");
  label.htmlFor = "todo-item";
  label.appendChild(document.createTextNode(todoItem));
  const br = document.createElement("br");

  todoListEl.appendChild(newInput);
  todoListEl.appendChild(label);
  todoListEl.appendChild(br);
  todoEl.value = '';


}


submitBtn.addEventListener("click", function(){
  addToList();
})