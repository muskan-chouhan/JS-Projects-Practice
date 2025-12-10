function diffrence(num) {

    let diff = Math.abs(num - 13);   //abs absolute value deta hai

    if (num > 13) {
        return 2 * diff;
    } else {
        return diff;
    }
}

const result = diffrence(3);
console.log(result);
