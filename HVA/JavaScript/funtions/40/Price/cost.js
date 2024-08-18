function calculatePaintingCost(shape, dimensions, costPerUnitArea) {
    let area;

    switch (shape.toLowerCase()) {
        case 'rectangle':
            // dimensions = { length: number, width: number }
            area = dimensions.length * dimensions.width;
            break;
        case 'circle':
            // dimensions = { radius: number }
            area = Math.PI * Math.pow(dimensions.radius, 2);
            break;
        case 'triangle':
            // dimensions = { base: number, height: number }
            area = 0.5 * dimensions.base * dimensions.height;
            break;
        default:
            throw new Error('Invalid shape');
    }

    const cost = area * costPerUnitArea;
    return cost;
}

// Example usage:
const rectangleCost = calculatePaintingCost('rectangle', { length: 10, width: 5 }, 20);
const circleCost = calculatePaintingCost('circle', { radius: 7 }, 20);
const triangleCost = calculatePaintingCost('triangle', { base: 8, height: 4 }, 20);

console.log(`Rectangle cost: $${rectangleCost}`);
console.log(`Circle cost: $${circleCost}`);
console.log(`Triangle cost: $${triangleCost}`);
