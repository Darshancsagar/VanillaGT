let colorInterval; // To store the interval ID

// Function to change the color of the element
function changeColor() {
  const colors = ["red", "blue", "green", "orange", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const element = document.querySelector("#color-changing-div");
  element.style.color = randomColor;
}

// Start the color change when the "Start Color Change" button is clicked
document.querySelector("#startButton").addEventListener("click", () => {
  if (!colorInterval) {
    colorInterval = setInterval(changeColor, 1000); // Change color every 1000ms (1 second)
  }
});

// Stop the color change when the "Stop Color Change" button is clicked
document.querySelector("#stopButton").addEventListener("click", () => {
  if (colorInterval) {
    clearInterval(colorInterval);
    colorInterval = null;
  }
});

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let amPm = "AM";

  // Convert to 12-hour format and determine AM or PM
  if (hours >= 12) {
    amPm = "PM";
    hours = hours % 12 || 12; // Convert 12:00 PM to 12:00 PM, not 0:00 PM
  }

  hours = String(hours).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;

  const clockElement = document.getElementById("time");
  clockElement.textContent = timeString;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Call it immediately to display the time
