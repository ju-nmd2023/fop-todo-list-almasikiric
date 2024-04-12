const addButton = document.getElementById("add-button");
const inputFieldAdd = document.getElementById("input-field-add");
const taskContainer = document.getElementById("ul-task-list");

let tasks = []; //Creating an array

//JSON HERE

function addedTasks() {
  const taskText = inputFieldAdd.value.trim(); // removes extra spaces between words or letters, also before and after

  if (taskText !== "") {
    tasks.push(taskText);
    inputFieldAdd.value = "";
  } else {
    inputFieldAdd.value = ""; //If adding a task with space, it wont submit and default input text is added again
    alert("Please write a task");
  }
}

addButton.addEventListener("click", addedTasks);

function displayTasks() {

}
