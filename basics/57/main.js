function middleThree(str) {

    if (str.length < 3 || str.length % 2 === 0) {
        return false;
    }

    let mid = Math.floor(str.length / 2);
    return str.slice(mid - 1, mid + 2);
}

console.log(middleThree("abcde"));   // bcd
console.log(middleThree("abcdefg")); // cde
console.log(middleThree("abc"));     // abc
console.log(middleThree("abcd"));    // false

//
