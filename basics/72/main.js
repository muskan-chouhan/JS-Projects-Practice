function contains13(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1 || nums[i] === 3) {
            return true;
        }
    }
    return false;
}

console.log(contains13([1, 5]));   // true
console.log(contains13([2, 5]));   // false
console.log(contains13([3, 7]));   // true



const check = (nums) => {
  return nums.includes(1) || nums.includes(3);
};

// Example usage
console.log(check([1, 5]));
console.log(check([2, 3]));
console.log(check([7, 5]));