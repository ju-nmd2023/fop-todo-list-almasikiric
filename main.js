const addButton = document.getElementById("add-button");
const inputFieldAdd = document.getElementById("input-field-add");
const taskContainer = document.getElementById("ul-task-list");

let tasks = []; //Creating an array

//load in local storage
if (localStorage.getItem("tasks") !== null) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  displayTasks();
}

function addedTasks() {
  let newTaskText = inputFieldAdd.value.trim(); // removes extra spaces between words or letters, also before and after

  if (newTaskText !== "") {
    tasks.push({ addedTaskText: newTaskText, complete: false });
    inputFieldAdd.value = "";
    displayTasks();
  } else {
    inputFieldAdd.value = ""; //If adding a task with space, it wont submit and default input text is added again
    alert("Please write a task");
  }
}

//empties entire tasklist
function displayTasks() {
  taskContainer.innerHTML = "";

  //The loop of the array starts here
  tasks.forEach((task) => {
    let taskElement = document.createElement("li");
    taskElement.innerHTML = task.addedTaskText;

    //Creating the complete button, got inspiration from here how to add HTML elements: https://stackoverflow.com/questions/20786555/create-button-dynamically-and-assign-a-function-to-it

    //finds the task and says its place in the array.
    let button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerText = "DELETE";

    //finds the index/number the task has, dont know how else to get it, incrementing tasknumber was flawed. Citation line 49-52 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    button.onclick = function () {
      let taskNumber = tasks.indexOf(task);
      deleteTask(taskNumber);
    };

    taskElement.append(button);

    //taskelement (parent) attaches/appends/connect its child, button here so its visible

    //delete button added from HTML
    button = document.createElement("button");

    button.classList.add("complete-button");
    button.innerText = "COMPLETE"; //This shows whats written in the buttons, also makes the button pop up

    //Actually says WHEN task.complete is true, 37, 38 runs.
    if (task.complete === true) {
      taskElement.classList.add("button-group-done");
      button.innerText = "COMPLETED";
    }
    button.onclick = function () {
      let taskNumber = tasks.indexOf(task);
      toggleTasks(taskNumber);
    };
    taskElement.append(button);
    taskContainer.append(taskElement);
  });

  //save in local storage
  localStorage.tasks = JSON.stringify(tasks);
}

function toggleTasks(taskNumber) {
  //when its completed task looks like this {addedTaskText: "whatever", complete: true}
  // false: {addedTaskText: "whatever", complete: false}  <-- this value gets changed
  if (tasks[taskNumber].complete === false) {
    //if its false
    tasks[taskNumber].complete = true; //change to true
  } else {
    //if its true
    tasks[taskNumber].complete = false; //change to false
  }

  displayTasks();
}
function deleteTask(taskNumber) {
  tasks.splice(taskNumber, 1); //removes 1 task at clicked place (taskNumber)
  displayTasks();
}

//Adding tasks with enter
inputFieldAdd.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    inputFieldAdd.blur(); //removes the text marker after pressing enter, resets. Citation line 103: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur 13/4/2024
    addedTasks();
  }
});

//When the add button is clicked, the function addedtasks runs
addButton.addEventListener("click", addedTasks);
