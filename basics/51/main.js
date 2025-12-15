function repeatString(str, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString("hi", 3));      // hihihi
console.log(repeatString("muskan", 2));  // muskanmuskan
