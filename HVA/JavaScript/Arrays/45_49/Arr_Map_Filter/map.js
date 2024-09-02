const numbers = [1, 2, 2, 4, 2, 6, 7, 8, 9, 10];

function displayForEach() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear the output

    numbers.forEach(number => {
        const div = document.createElement('div');
        div.textContent = number;
        outputDiv.appendChild(div);
    });
}

function displayMap() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear the output

    const squaredNumbers = numbers.map(number => number * number);
    
    squaredNumbers.forEach(number => {
        const div = document.createElement('div');
        div.textContent = number;
        outputDiv.appendChild(div);
    });
}

function displayFilter() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 

    const evenNumbers = numbers.filter(number => number % 2 === 0);
    
    evenNumbers.forEach(number => {
        const div = document.createElement('div');
        div.textContent = number;
        outputDiv.appendChild(div);
    });
}

function displayfilter1() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 

    const evenNumbers = numbers.filter(number => number % 2 != 0);
    
    evenNumbers.forEach(number => {
        const div = document.createElement('div');
        div.textContent = number;
        outputDiv.appendChild(div);
    });
}
