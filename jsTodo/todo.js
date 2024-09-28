let todoList = [];

function addTodo(){
    let inputElement = document.querySelector(".todo-container input")
    todoList.push(inputElement.value)
    inputElement.value = ""
    displayList()
}

function displayList(){
    let displayContainerElement = document.querySelector(".task-container")
    let newHtml = ""
    for(let i = 0; i < todoList.length; i++){
        newHtml += `
   <div class="newTaskChildContainer">
    <p>${todoList[i]}</p>
    <div class="btn-container">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn" onclick="todoDelete(${i})">Delete</button>
  </div>
   </div>`
    }
    displayContainerElement.innerHTML = newHtml;
}

function todoDelete(index){
    todoList.splice(index,1);
    displayList()
}