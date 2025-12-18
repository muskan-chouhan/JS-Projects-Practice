
function two_string(str, n)
  {
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
 }

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));



//
function firstLastN(str, n) {

    if (str.length < n) {
        return false;
    }

    let firstPart = str.slice(0, n);
    let lastPart = str.slice(-n);

    return firstPart + lastPart;
}

console.log(firstLastN("JavaScript", 2)); // Japt
console.log(firstLastN("Python", 3));     // Python
console.log(firstLastN("ab", 3));         // false
