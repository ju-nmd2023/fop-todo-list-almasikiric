//Disclaimer, yes I have some comments but it is because I wanted to go in depth and learn as much as possible, also had to plan many steps

const addButton = document.getElementById("add-button");
const inputFieldAdd = document.getElementById("input-field-add");
const taskContainer = document.getElementById("ul-task-list");

let tasksArray = [];

//load in local storage
if (localStorage.getItem("tasksArray") !== null) {
  //null = does not exist
  tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
  displaytasks();
}

function addtasks() {
  let addedInput = inputFieldAdd.value.trim(); // removes extra spaces between words or letters. also makes it so you cannot add only spaces as a taskitem

  if (addedInput !== "") {
    tasksArray.push({ taskName: addedInput, complete: false }); //Pushes addtasks, sets completed button to false (connected with the button)

    displaytasks();
  } else {
    alert("Please write a task :))");
  }
  inputFieldAdd.value = ""; // always resets the input text (your plans...) after doing something
}

//empties entire tasklist
function displaytasks() {
  taskContainer.innerHTML = "";

  //The loop of the array starts here
  tasksArray.forEach((taskItem) => {
    let taskElement = document.createElement("li");
    taskElement.innerHTML = taskItem.taskName; //the task is accessed FROM tasksArray as singular to manipulate each task

    //Creating the complete button, got inspiration from here how to add HTML elements w/ styling: https://stackoverflow.com/questions/20786555/create-button-dynamically-and-assign-a-function-to-it

    let button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerText = "DELETE";

    //indexOf finds the particular task you want to delete and finds the place in the list, starts w 0. Citation line 46 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    button.onclick = function () {
      let taskNumber = tasksArray.indexOf(taskItem);
      deletetask(taskNumber);
    };
    //delete button added to HTML
    taskElement.append(button);

    //Clear the delete button properties, empty button element
    button = document.createElement("button");
    button.classList.add("complete-button");
    button.innerText = "COMPLETE"; //This shows whats written in the buttons, also makes the button pop up

    //Actually says WHEN task.complete is true
    if (taskItem.complete === true) {
      taskElement.classList.add("button-group-done");
      button.innerText = "COMPLETED";
    }
    button.onclick = function () {
      let taskNumber = tasksArray.indexOf(taskItem);
      toggleTask(taskNumber);
    };
    taskElement.append(button);

    //It tells the taskelement to be put inside the container, and visible there
    taskContainer.append(taskElement);
  });

  //save in local storage
  localStorage.tasksArray = JSON.stringify(tasksArray);
}

function toggleTask(taskNumber) {
  //function to invert the completestatus
  if (tasksArray[taskNumber].complete === false) {
    //If  false
    tasksArray[taskNumber].complete = true; // Change it to true
  } else {
    // otherwise... (its already true)
    tasksArray[taskNumber].complete = false; //..change to false
  }
  // Talked with my brother about a different solution that I could use next time :)
  // tasksArray[taskNumber].complete = !tasksArray[taskNumber].complete;
  displaytasks();
}

function deletetask(taskNumber) {
  tasksArray.splice(taskNumber, 1);
  displaytasks();
}

//Adding tasksArray with enter
inputFieldAdd.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    inputFieldAdd.blur(); //removes the text marker after pressing enter, resets. Citation: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur 13/4/2024
    addtasks();
  }
});

addButton.addEventListener("click", addtasks);
