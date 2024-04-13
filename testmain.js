//  function addTasks () {
//   for (let task of tasks) {
//     //will run when the event "load" is triggered. after that, this function runs

//   }
// }

// addTasks();

// When clicking add, javascript should listen

//access whats written in input form. save in variable

//next step is to create a new element that contains
//the plans

// element should be inserted onto the webpage

//save in local storage
window.onload = function () {};
const addButton = document.getElementById("add-button");
//const inputComplete = document.getElementById("complete-button");
const inputFieldAdd = document.getElementById("input-field-add");
const taskContainer = document.getElementById("ul-task-list");

let tasks = []; // Array that stores added tasks from the taskform.

addButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  addTasks();
});

function addTasks() {
  // if inputfieldadd is not empty, then tasks are added to the array
  if (inputFieldAdd.value.trim() !== "") {
    let taskInputText = inputFieldAdd.value;
    let newTask = { taskText: taskInputText };
    tasks.push(newTask); // Pushing the new task into the array tasks
    displayTask(); // Calling this function as a part of the commands
    inputFieldAdd.value = ""; //removes input box to default after submitting in the list
  } else {
    inputFieldAdd.value = ""; //If adding a task with space, it wont submit and default input text is added again
    alert("Please write a task");
  }
}

function deleteTasks() {
  alert("task");
}

function displayTask() {
  //li section
  // When clicking add, we access the li element here
  const taskElement = document.createElement("li");
  taskElement.innerText = "";
  tasks.forEach((task) => {
    taskElement.innerText = task.taskText; // going through the array, and get the task text value (input), display it as innertext of li.
    console.log(tasks);

    // delete and complete button section. Add buttons with classes
    const completeButton = document.createElement("button");

    completeButton.innerText = "COMPLETE"; // says complete in button2
    completeButton.classList.add("complete-button"); //here button is accessed from html
    taskElement.append(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.classList.add("button delete-button");
    taskElement.append(deleteButton);

    taskContainer.append(taskElement);
  });
}
