function calculate(operation, num1, num2) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            console.log("add");

            break;
        case 'subtract':
            result = num1 - num2;
            console.log("subtract");

            break;
        case 'multiply':
            result = num1 * num2;
            console.log("multiply");

            break;
        case 'divide':
            result = num1 / num2;
            console.log("divide");

            break;
        case 'modulus':
            result = num1 % num2;
            console.log("modulus");

            break;
        case 'exponent':
            result = num1 ** num2;
            console.log("exponent");
            break;
            case 'sqrt':
            result = Math.sqrt(num1); // Only using the first number
            console.log("sqrt of num1");
            break;
        // case 'abs':
        //     result = Math.abs(num1); // Only using the first number
        //     console.log("abs of num1");
        //     break;
        case 'max':
            result = Math.max(num1, num2);
            console.log("max number");
            break;
        case 'min':
            result = Math.min(num1, num2);
            console.log("min number");
            break;
        default:
            result = 'Invalid operation';
    }

    return result;
}

// Example usage:
console.log(calculate('add', 5, 3));        
console.log(calculate('subtract', 10, 4));  
console.log(calculate('multiply', 7, 2));   
console.log(calculate('divide', 20, 4));    
console.log(calculate('modulus', 10, 3));   
console.log(calculate('exponent', 3, 2));
// console.log(calculate('abs',10)); 
console.log(calculate('sqrt',5)); 
console.log(calculate('max',19,2)); 
console.log(calculate('min',19,2)); 


