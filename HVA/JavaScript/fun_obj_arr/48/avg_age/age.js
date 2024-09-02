let ages = [];

function addAge() {
  const ageInput = document.getElementById("ageInput").value.trim();
  const age = parseInt(ageInput);

  if (!isNaN(age) && age > 0) {
    ages.push(age);
    document.getElementById("ageInput").value = '';
    displayAges();
  } else {
    alert("Please enter a valid age.");
  }
}

function displayAges() {
  const ageList = document.getElementById("ageList");
  ageList.innerHTML = '';
  ages.forEach(age => {
    const li = document.createElement("li");
    li.textContent = age;
    ageList.appendChild(li);
  });
  calculateAverageAge();
}

function calculateAverageAge() {
  if (ages.length === 0) {
    document.getElementById("averageAge").textContent = 0;
    return;
  }

  const total = ages.reduce((sum, age) => sum + age, 0);
  const average = total / ages.length;
  document.getElementById("averageAge").textContent = average.toFixed(2);  // Display with 2 decimal places
}


function removeAge() {
    const removeAgeInput = document.getElementById("removeAgeInput").value.trim();
    const ageToRemove = parseInt(removeAgeInput);
  
    if (!isNaN(ageToRemove)) {
      const index = ages.indexOf(ageToRemove);
      if (index !== -1) {
        ages.splice(index, 1);  // Remove the age at the found index
        displayAges();  // Update the display after removing
        document.getElementById("removeAgeInput").value = '';  // Clear input field
      } else {
        alert("Age not found in the list.");
      }
    } else {
      alert("Please enter a valid age.");
    }
  }
  