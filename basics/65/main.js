
const first_last_1 = nums => {
    return nums[0] === 1 || nums[nums.length - 1] === 1;
};

console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6])); 