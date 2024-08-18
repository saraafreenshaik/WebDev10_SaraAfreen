
// high order: Takes one or more functions as arguments (callbacks).
//Returns a function as its result.

function calculate(operation, num1, num2) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let sum = calculate(add, 5, 3);
console.log("Sum:", sum); 

let difference = calculate(subtract, 5, 3);
console.log("Difference:", difference);  

let product = calculate(multiply, 5, 3);
console.log("Product:", product); 

let quotient = calculate(divide, 5, 3);
console.log("Quotient:", quotient);  
