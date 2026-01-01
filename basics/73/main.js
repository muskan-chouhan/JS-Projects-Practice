const check = (nums) => {
        return !nums.includes(1) && !nums.includes(3);
}

console.log(check([2,3]));
console.log(check([1,3]));
console.log(check([2,2]));
