function newstring(str) {
    if (str.length >= 3) {
        return str.substring(str.length - 3).repeat(4);
    }
    return false;
}

console.log(newstring("muskan"));


//use slice
function last3Copies(str) {

    if (str.length < 3) {
        return false;
    }

    let last3 = str.slice(-3);
    let result = "";

    for (let i = 0; i < 4; i++) {
        result += last3;
    }

    return result;
}

console.log(last3Copies("Python")); // honhonhonhon
console.log(last3Copies("abc"));    // abcabcabcabc
console.log(last3Copies("ab"));     // false
