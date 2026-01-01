const check = (arr) => {
        return arr.includes(1) || arr.includes(3);
}

console.log(check([2,3]));
console.log(check([1,3]));
console.log(check([2,2]));
