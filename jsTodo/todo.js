let taskList = [];

let input = document.querySelector(".input-container input");
let  taskContainerElement = document.querySelector('.task-container');
if(taskList.length === 0){
    let newTaskChildContainerElement = document.createElement("div");
    newTaskChildContainerElement.classList.add('newTaskChildContainer')
    newTaskChildContainerElement.innerHTML = `<p class="emptyToDo">Enjoy your Day No More Task for Today</p>`
    taskContainerElement.appendChild(newTaskChildContainerElement)
}

let addTask = () => {
    if(taskList.length > 0){

        let emptyToDoElement = document.querySelector('.emptyToDo')
        emptyToDoElement.classList.add(".hidden")
    }
   

    let newTaskChildContainerElement = document.createElement("div");
  newTaskChildContainerElement.classList.add('newTaskChildContainer')
  newTaskChildContainerElement.innerHTML= `<p class="task-title">${input.value}</p>
  <div class="btn-container">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
  </div>`
 
    taskList.push(newTaskChildContainerElement)
    console.log(taskList)

    taskList.map((task)=>{
        taskContainerElement.appendChild(task)
    })
                
    // taskContainerElement.appendChild(newTaskChildContainerElement)

console.log(taskList)
};
