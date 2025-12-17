function repeatString(str, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString("hi", 3));      // hihihi
console.log(repeatString("muskan", 2));  // muskanmuskan


///
function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));