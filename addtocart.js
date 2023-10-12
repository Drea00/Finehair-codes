// Get references to the HTML elements
const plusButton = document.querySelector('.plus');
const group2 = document.querySelector('.roup');
const inbox= document.querySelector('.counting');

// Function to hide .group-2 and show .group
function toggleGroups() {
    group2.style.display = 'none';
    inbox.style.display = 'block';
}

// Add a click event listener to the .plus button
plusButton.addEventListener('click', toggleGroups);

let numberDisplay = document.querySelector(".text-wrapper-2");   
let increaseButton = document.querySelector(".vector");
let decreaseButton = document.querySelector(".img");

let number = 1; // Initialize the number to 1

// Function to update and display the number
function updateNumber() {
numberDisplay.textContent = number;
}

// Event listener for the increase button
increaseButton.addEventListener('click', function () {
number++;
updateNumber();
});

// Event listener for the decrease button
decreaseButton.addEventListener('click', function () {
if (number > 0) {
 number--;
 updateNumber();
}
});

// Initial display
updateNumber();
