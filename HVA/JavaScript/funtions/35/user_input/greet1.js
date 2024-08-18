//npm install readline-sync
// const readlineSync = require('readline-sync');

// function greet(name) {
//     return "Hello, " + name + "! Welcome!";
// }

// let userName = readlineSync.question("Enter your name: ");
// let message = greet(userName);
// console.log(message);

// // script.js
// function showGreeting() {
//     const userName = prompt("Enter your name:");
//     const greeting = greet(userName);
//     document.getElementById("greeting").textContent = greeting;
// }
function greet(name) {
    return "Hello, " + name + "! Welcome!";
}

function showGreeting() {
    const userName = prompt("Enter your name:");
    const greeting = greet(userName);
    document.getElementById("greeting").textContent = greeting;
    document.querySelector("button").style.display = "none";

}
