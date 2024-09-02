function convertToFahrenheit() {
    let input = document.getElementById("temperatures").value;
    let temperatures = input.split(",").map(Number);
    
    let fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
    
    displayResults(fahrenheitTemps, "Fahrenheit");
}

function convertToCelsius() {
    let input = document.getElementById("temperatures").value;
    let temperatures = input.split(",").map(Number);
    
    let celsiusTemps = temperatures.map(temp => (temp - 32) * 5/9);
    
    displayResults(celsiusTemps, "Celsius");
}

function displayResults(temps, scale) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<h3>Converted Temperatures to ${scale}:</h3><p>${temps.join(", ")}</p>`;
}
