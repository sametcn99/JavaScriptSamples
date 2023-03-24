//This code selects and assigns HTML elements with class names "widget", "time", and "date" to variables using querySelector.
const widget = document.querySelector('.widget');
const timeElement = widget.querySelector('.time');
const dateElement = widget.querySelector('.date');

// This code updates the time and date displayed on a webpage using the current date and time obtained from the JavaScript Date object.
function updateTime() {
  const now = new Date(); //creates a new Date object
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const year = now.getFullYear();
  const month = now.toLocaleString('default', { month: 'long' });
  const day = now.getDate();

  //This code updates the text content of two HTML elements, one displaying the current time and the other displaying the current date.
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = `${month} ${day}, ${year}`;
}

//This code sets up a recurring timer that calls the function "updateTime" every 1000 milliseconds (1 second). 
//This allows the function to be executed repeatedly at a regular interval.
setInterval(updateTime, 1000);