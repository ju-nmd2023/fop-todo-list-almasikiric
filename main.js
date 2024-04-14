const addButton = document.getElementById("add-button");
const inputFieldAdd = document.getElementById("input-field-add");
const taskContainer = document.getElementById("ul-task-list");

let tasks = []; //Creating an array
//JSON HERE

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

function displayTasks() {
  taskContainer.innerHTML = ""; //empties entire tasklist

  //Loop
  tasks.forEach((task) => {
    let taskElement = document.createElement("li");
    taskElement.innerHTML = task.addedTaskText;

    //complete button
    let button = document.createElement("button");
    button.classList.add("complete-button");
    button.innerText = "COMPLETE"; //This shows whats written in the buttons, also makes the button pop up

    if (task.complete === true) {
      taskElement.classList.add("button-group-done");
      button.innerText = "COMPLETED";
    }

    button.onclick = function () {
      let taskNumber = tasks.indexOf(task); //finds the task and says its place in the array.
      toggleTasks(taskNumber);
    };
    taskElement.append(button); //taskelement (parent) attaches/appends/connect its child, button here so its visible

    //delete button
    button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerText = "DELETE";
    button.onclick = function () {
      //finds the index/number the task has, dont know how else to get it, incrementing tasknumber was flawed. Citation line 49-52 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
      let taskNumber = tasks.indexOf(task);
      deleteTask(taskNumber);
    };

    taskElement.append(button);
    taskContainer.append(taskElement);
  });
}
//it already has a click function in display tasks so that should be solved
// create a function with a name, and access tasknumber in it so that it can TARGET one task
// create a let or const ? dont know
// create element AND class? task by adding complete button done (the one with red and strikethrough)

// add toggle task function with ture false  statement
// if should be if task is complete, it should be a line
// otherwise, else should be resetted to normal.
//how to keep track of task status. complete/ not complete?

//create boo lean so that the correct task and index is complete when its true, otherwise false

// complete should be able to go in a loop so u can click it on off, but im not sure how, maybe forEach?
// displaytasks should be called in the function so that they are visible

// (save in local storage)

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

// let buttons = document.querySelector("button");
// let buttonDone = document.querySelector("button-group-done");
// buttons.className = "button";
// buttonDone = "button-group-done";

// if (completeTask.checked) {
//   buttons.classList.add("button-group-done");
// } else {
//   buttons.classList.remove("button");
// }
// const completeButtonDone = classList.add("button-group-done");
// completeButtonDone.classList.add("button-group-done", !isDone);
// if (completeButtonDone) {
//   completeButtonDone.toggle("button-group-done");

// } else {
//   completeButtonDone.remove("button-group-done");

// }

//Adding tasks with enter
inputFieldAdd.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    inputFieldAdd.blur(); //removes the text marker after pressing enter, resets. Citation line 32: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur 13/4/2024
    addedTasks();
  }
});

addButton.addEventListener("click", addedTasks); //When the add button is clicked, the function addedtasks runs

////https://stackoverflow.com/questions/20786555/create-button-dynamically-and-assign-a-function-to-it
