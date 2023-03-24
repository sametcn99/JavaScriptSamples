/*This code is creating variables that reference specific elements in the HTML document using their respective IDs.
input is referencing an input element with the ID "input".
addBtn is referencing a button element with the ID "add-btn".
list is referencing an unordered list element with the ID "list".
These variables can be used to manipulate or access the corresponding elements in the HTML document using JavaScript. */
const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");

let completedTasks = [];
let unCompletedTasks = [];

/*This code adds a new task to a to-do list when the user clicks on a button with the ID "addBtn". 
It first checks if the input value is a non-empty string, and if it is, it creates a new task element with a checkbox and a delete button. 
The checkbox allows the user to mark the task as complete, and the delete button allows the user to remove the task from the list. 
The code also logs the text content of the task and the length of the task list to the console. 
If the input value is not a non-empty string, the code clears the input value and displays an alert message. */
addBtn.addEventListener("click", function addTask() {
  const trimmedInput = input.value.trim();
  if (typeof input.value === "string" && input.value != "" && trimmedInput != "") {
    // create task elements
    const newTask = document.createElement("li");
    newTask.setAttribute('draggable', true);
    const taskText = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn"); // add delete button class
    const tasks = list.querySelectorAll('li'); // select list length

    taskText.textContent = input.value; //get input value
    deleteBtn.textContent = "X"; //delete button icon

    // add fields into task list
    newTask.appendChild(taskText);
    newTask.appendChild(deleteBtn);
    list.appendChild(newTask);
    newTask.id = "task-" + (tasks.length + 1);
    input.value = ""; //clear input value if task added

    unCompletedTasks.push(newTask.textContent);
    //console.log("uncompleted tasks: " + unCompletedTasks + "///// Completed tasks: " + completedTasks);

    /*This code snippet is a JavaScript event listener that is triggered when a user clicks on a task in a to-do list.
    The code first checks if the clicked task has the class "complete". If it does not have the class, 
    it adds the class "complete" to the task and the task text, indicating that the task has been completed. 
    It then adds the task text to the completedTasks array and removes it from the unCompletedTasks array.
    If the clicked task already has the class "complete", the code removes the class from the task and the task text, 
    indicating that the task has been marked as incomplete. It then adds the task text to the unCompletedTasks array 
    and removes it from the completedTasks array. The code also logs the updated unCompletedTasks and completedTasks 
    arrays to the console.*/
    newTask.onclick = () => {
      if (!newTask.classList.contains("complete")) {
        completedTasks.push(newTask.textContent);
        let indexToDelete = unCompletedTasks.indexOf(newTask.textContent);
        if (indexToDelete > -1) { // Check if the string is found in the array
          unCompletedTasks.splice(indexToDelete, 1); // Remove the element at the index
        }
        newTask.classList.add("complete");
        taskText.classList.add("complete");
      } else {
        unCompletedTasks.push(newTask.textContent);
        let indexToDelete = completedTasks.indexOf(newTask.textContent);
        if (indexToDelete > -1) { // Check if the string is found in the array
          completedTasks.splice(indexToDelete, 1); // Remove the element at the index
        }
        newTask.classList.remove("complete");
        taskText.classList.remove("complete");
      }
    };

    /*This code logs two things to the console:
    The text content of an HTML element with the ID "taskText".
    The length of an array called "tasks". */
    /*console.log(taskText.textContent)
    console.log("tasks length: " + tasks.length);
    console.log("Input is a string");*/

  } else {
    //console.log("Input is not a string");
    input.value = ""; // clear input value when input is not a string
    alert("input is empty!") // empty input alert
  }
});

/*This code initializes a new instance of the Sortable library on the HTML element with the ID "list". 
This allows the user to drag and drop items within the list to reorder them. */
const taskList = document.getElementById('list');
new Sortable(taskList);

/*
The function is triggered whenever a user clicks on an element 
inside the "list" element, and checks if the clicked element is a "BUTTON" element. If the 
clicked element is a button, it removes the parent element of the button (which is presumably a list item) from the DOM.
*/
list.addEventListener("click", function (e) {
  // check if the clicked element is a button
  if (e.target.tagName === "BUTTON") { /* This is done by checking the tagName property of the clicked element (e.target.tagName) 
  to see if it is equal to the string "BUTTON". 
  If the condition is true, it means the clicked element is a button, 
  so the next line of code removes its parent element (the list item) 
  from the DOM using the remove() method. */
    e.target.parentNode.remove(); // if it is, remove the parent element (list item) from the DOM
  }
});

/*This code adds an event listener to an input element that listens for the "Enter" key to be pressed. 
When the "Enter" key is pressed, it triggers a click event on a button with the id "addBtn". */
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    addBtn.click();
  }
});