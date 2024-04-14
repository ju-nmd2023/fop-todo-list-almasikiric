const addButton = document.getElementById("add-button");
const inputFieldAdd = document.getElementById("input-field-add");
const taskContainer = document.getElementById("ul-task-list");

let tasks = []; //Creating an array
//JSON HERE

function addedTasks() {
  let newTaskText = inputFieldAdd.value.trim(); // removes extra spaces between words or letters, also before and after

  if (newTaskText !== "") {
    tasks.push({ JSONTaskText: newTaskText, checked: false });
    inputFieldAdd.value = "";
    displayTasks();
  } else {
    inputFieldAdd.value = ""; //If adding a task with space, it wont submit and default input text is added again
    alert("Please write a task");
  }
}

function displayTasks() {
  taskContainer.innerHTML = ""; //empties entire tasklist
  //array starts at place 0 but 1 is added in 1st loop cycle
  // let taskNumber = -1;
  //Loop
  tasks.forEach((task) => {
    // taskNumber = taskNumber + 1;
    // alert(taskNumber);
    let taskElement = document.createElement("li");
    taskElement.innerHTML = task.JSONTaskText;
    taskContainer.append(taskElement);
    //complete button
    let button = document.createElement("button");
    button.classList.add("complete-button");
    button.innerText = "COMPLETE"; //This shows whats written in the buttons, also makes the button pop up

    // button.onclick = function () {
    //   //citation
    //   completeTask();
    // };

    taskElement.append(button);

    //delete button
    button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerText = "DELETE";
    button.onclick = function () {
      //finds the index/number the task has, dont know how else to get it, incrementing tasknumber was flawed
      let taskNumber = tasks.indexOf(task);
      deleteTask(taskNumber);
    };

    taskElement.append(button);
  });
}

function deleteTask(taskNumber) {
  tasks.splice(taskNumber, 1);
  displayTasks();
}
//Adding tasks with enter
inputFieldAdd.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    inputFieldAdd.blur(); //removes the text marker after pressing enter, resets. Citation line 32: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur 13/4/2024
    addedTasks();
  }
});

addButton.addEventListener("click", addedTasks); //When the add button is clicked, the function addedtasks runs

// REMOVE TASKS
