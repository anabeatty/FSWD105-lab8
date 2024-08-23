function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getMachineName() {
  return new Promise((resolve, reject) => {
    // Simulate fetching machine name (replace with actual fetching logic if necessary)
    setTimeout(() => {
      resolve(window.location.hostname);
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

  getMachineName().then((machineName) => {
    document.getElementById("machine-name").textContent = machineName;
  });
});

// Create the list based on user input
function functionCreateListButton() {
  let valid = false;
  let number;

  while (!valid) {
    let input = prompt("Please enter a number between 21 and 99:");

    // Convert input to a number and validate
    number = Number(input);

    if (!isNaN(number) && number >= 21 && number <= 99) {
      valid = true;
      createList(number);
    } else {
      alert("Invalid input. Please enter a valid number between 21 and 99.");
    }
  }

  return number;
}

// Create a list with a given number of items
function createList(number) {
  let unorderedList = document.createElement("ul"); // Corrected to "ul"

  for (let i = 1; i <= number; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${i}`;
    li.style.color = getRandomColorForList(); // Apply random color to each list item
    unorderedList.appendChild(li);
  }

  document.body.appendChild(unorderedList);
}

// Generate a random color in hexadecimal format
function getRandomColorForList() {
  let color = "#";
  let hexChars = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Main function execution
//let validNumber = functionCreateListButton();
console.log("You entered a valid number:", validNumber);

//createList(validNumber);
