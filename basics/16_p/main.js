

const checkRange = (n) => {
    return (Math.abs(n - 100) <= 20) || (Math.abs(n - 400) <= 20);
}

console.log(checkRange(90));  // true
console.log(checkRange(120)); // true
console.log(checkRange(380)); // true
console.log(checkRange(350)); // false

