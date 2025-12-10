
const diff_num = (n) => {
  if (n <= 19) {
    // If true, return the difference between 19 and n
    return 19 - n;
  } else {
    // If false, return three times the difference between n and 19
    return (n - 19) * 3;
  }
};


console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));





//type 2 
const sum = (num) => {
    let difference = Math.abs(num - 19);   //Absolute difference
    return num > 19 ? 3 * difference : difference;
}

console.log(sum(10)); // 9
console.log(sum(20)); // 3
