const positive_negative = (x, y) => ((x < 0 && y > 0) || (x > 0 && y < 0));

console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));