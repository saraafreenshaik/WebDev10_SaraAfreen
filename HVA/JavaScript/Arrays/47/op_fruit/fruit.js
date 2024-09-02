// script.js
let fruits = [];

function addFruit() {
  const fruitInput = document.getElementById("fruitInput").value.trim();
  if (fruitInput && !fruits.includes(fruitInput)) {
    fruits.push(fruitInput);
    document.getElementById("fruitInput").value = '';
    displayFruits();
  }
}

function removeFruit() {
  const removeFruitInput = document.getElementById("removeFruitInput").value.trim();
  fruits = fruits.filter(fruit => fruit !== removeFruitInput);
  document.getElementById("removeFruitInput").value = '';
  displayFruits();
}

function displayFruits() {
  const fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = '';
  fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}

function popFruit() {
    if (fruits.length > 0) {
      fruits.pop();
      displayFruits();
    } else {
      alert("No fruits to pop!");
    }
  }
  
  function uppercaseFruits() {
    fruits = fruits.map(fruit => fruit.toUpperCase());
    displayFruits();
  }
  
  function titlecaseFruits() {
    fruits = fruits.map(fruit => fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase());
    displayFruits();
  }

  function updateFruitCount() {
    document.getElementById("fruitCount").textContent = fruits.length;
  }

  function sortFruitsAsc() {
    fruits.sort((a, b) => a.localeCompare(b));
    displayFruits();
  }
  
  function sortFruitsDesc() {
    fruits.sort((a, b) => b.localeCompare(a));
    displayFruits();
  }
  