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
