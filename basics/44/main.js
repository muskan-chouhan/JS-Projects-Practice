function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("muskan"));
console.log(reverseString("JavaScript"));


//type 2
const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("hello"));

//type 3
let s = "GeeksforGeeks";
const ans = [...s].reverse().join("");
console.log(ans);