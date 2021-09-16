const todoEl = document.querySelector("#todo");
const todoListEl = document.querySelector(".todo-list")
const submitBtn = document.querySelector("#submit");
const sumTodoEl = document.querySelector("#sum-todo");
const sumDoneEl = document.querySelector("#sum-done");
const sumTotalEl = document.querySelector("#sum-total");
let sumTodo = 0;
let sumDone = 0;
let sumTotal = 0;


// Update counter when new todo is added
function newTodoCounter(){
  sumTodo += 1;
  sumTotal += 1;
  sumTodoEl.innerText = `To Do: ${sumTodo}`;
  sumTotalEl.innerText = `Total: ${sumTotal}`;
}


//validation for value field
function addTodo(){
  let todoItem = todoEl.value;
  if (todoItem.length == 0){
    alert("Please enter a todo item");
  } else {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-css"
    checkbox.name = "checkbox";
    checkbox.id = "checkbox";

    // create label for checkbox
    const checkboxLabel = document.createElement("label");
    checkboxLabel.className = "checkbox-label";
    checkboxLabel.htmlFor = "checkbox";
    checkboxLabel.appendChild(document.createTextNode(todoItem));
    const br = document.createElement("br");

    todoListEl.appendChild(checkbox);
    todoListEl.appendChild(checkboxLabel);
    todoListEl.appendChild(br);
    newTodoCounter();
    todoEl.value = '';
  }
}

//add todo to list after submit
submitBtn.addEventListener("click", function(){
  addTodo();
})

