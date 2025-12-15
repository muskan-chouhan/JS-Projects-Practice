const check = (str) => {
  for (let i = 0; i < str.length - 4; i++) {
    if (
      (str[i] === "a" && str[i + 4] === "b") ||
      (str[i] === "b" && str[i + 4] === "a")
    ) {
      return true;
    }
  }
  return false;
}

console.log(check("muskafghb")); // true
console.log(check("pane borrowed"));
console.log(check("abCheck"));


//type 2 regex
function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str); // a ke baad 3 char chhor kr b chek krtqa hai 
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));