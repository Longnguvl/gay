function chunhat(length, width) {

    const perimeter = 2 * (length + width);
    
    const area = length * width;
    
    return {
        perimeter: perimeter,
        area: area
    };
}

const length = 5;
const width = 3;

const properties = chunhat(length, width);

console.log(`Chu vi: ${properties.perimeter}`);
console.log(`Diện tích: ${properties.area}`);