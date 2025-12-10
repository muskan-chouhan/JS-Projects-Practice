function sum(num1, num2) {
    if (num1 === 50 || num2 === 50) {
        return true;
    } 
    else if (num1 + num2 === 50) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(sum(20, 40)); // true
console.log(sum(25, 25)); // true
console.log(sum(12, 10)); // false
