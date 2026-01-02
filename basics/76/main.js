function addDigits(num) {
    let str = num.toString();
    return Number(str[0]) + Number(str[1]);
}

console.log(addDigits(34)); // 7



function addDigits(num) {
    let last = num % 10;
    let first = Math.floor(num / 10);
    return first + last;
}

console.log(addDigits(12)); // 3
console.log(addDigits(45)); // 9
console.log(addDigits(98)); // 17
