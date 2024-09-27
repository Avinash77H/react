

let input = document.querySelector("input-container input");


let addTask = ()=>{
    let newElement = document.createElement('p')
    newElement.innerText = input.value
    let newAddElement = document.querySelector('.task-container'); 

    newTaskDiv = document.createElement('div').classList.add('newTaskContainer');
    newAddElement.appendChild(newTaskContainer)
    // console.log(newAddElement)
    // newAddElement.appendChild(newElement)
}

