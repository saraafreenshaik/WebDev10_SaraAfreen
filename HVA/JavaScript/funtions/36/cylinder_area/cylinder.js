function calculateLateralSurfaceArea(radius, height) {
    return 2 * Math.PI * radius * height;
}

function calculateBaseArea(radius) {
    return Math.PI * radius * radius;
}

function calculateTotalSurfaceArea(radius, height) {
    return 2 * Math.PI * radius * (radius + height);
}

let radius = 5;
let height = 10;
let lateralSurfaceArea = calculateLateralSurfaceArea(radius, height);
console.log("Lateral Surface Area of the Cylinder:", lateralSurfaceArea);

let totalSurfaceArea = calculateTotalSurfaceArea(radius, height);
console.log("Total Surface Area of the Cylinder:", totalSurfaceArea);

let baseArea = calculateBaseArea(radius);
console.log("Base Area of the Cylinder:", baseArea);
