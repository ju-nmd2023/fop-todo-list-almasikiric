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
  taskContainer.innerHTML = "";
  //Loop
  tasks.forEach((task) => {
    let taskElement = document.createElement("li");
    taskElement.innerHTML = task.JSONTaskText;
    taskContainer.append(taskElement);

    let buttons = document.createElement("button");
    buttons.classList.add("complete-button");
    buttons.innerText = "COMPLETE"; //This shows whats written in the buttons, also makes the button pop up

    taskElement.append(buttons);

    buttons = document.createElement("button");
    buttons.classList.add("delete-button");
    buttons.innerText = "DELETE";

    //deletes task when clicking
    // deleteButton.onclick = function () {
    //   deleteTask(taskNumber);
    // };
    taskElement.append(buttons);
    // tasks.splice(addedTasks);
  });

  //   const removeButton = document.createElement("button");
  //   removeButton.innerText = "✖︎";
  //   removeButton.onclick = function () {
  //     removeTask(index);
  //   };
  //   removeButton.setAttribute("class", "deletebutton");

  //   newTask.appendChild(removeButton);
  //   taskList.appendChild(newTask);
  // });
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

function deleteTask(taskNumber) {
  tasks.splice(taskNumber, 1);
}
