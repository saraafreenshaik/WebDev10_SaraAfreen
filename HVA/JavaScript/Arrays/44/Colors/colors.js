// Define an array containing different color strings
let colors = ["red", "green", "blue", "yellow", "purple"];

// Display the colors array on the web page
function displayColors() {
    const colorList = document.getElementById('color-list');
    colorList.innerHTML = "";  // Clear the current list
    colors.forEach(color => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.textContent = color;
        colorList.appendChild(colorItem);

        // Add click event to show popup with the color name and respective color background
        colorItem.addEventListener('click', () => {
            showPopup(color);
        });
    });
}

// Function to show the popup with the respective color
function showPopup(color) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const popupText = document.getElementById('popup-text');

    popupText.textContent = `You clicked on ${color}!`;
    popupContent.style.backgroundColor = color;  // Change background to respective color
    popup.style.display = "block";
}

// Close popup when the close button is clicked
const closePopup = document.querySelector('.close');
closePopup.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = "none";
});

// Close popup when clicking outside the popup content
window.addEventListener('click', (event) => {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

// Function to add a new color
document.getElementById('add-color').addEventListener('click', () => {
    const colorInput = document.getElementById('color-input').value.trim();
    if (colorInput) {
        colors.push(colorInput);
        displayColors();
        document.getElementById('color-input').value = '';  // Clear input field
    }
});

// Function to remove the last color
document.getElementById('remove-last').addEventListener('click', () => {
    if (colors.length > 0) {
        colors.pop();
        displayColors();
    } else {
        alert("Array is already empty!");
    }
});

//
