function started(nums){
           first  = nums[0]
           last = nums[nums.length-1]
           return [first,last]
}

console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));


const check = (nums) => {
    let new_array = [];
    new_array.push(nums[0], nums[nums.length - 1]);
    return new_array;
}

console.log(check([20, 20, 30]));

console.log(check([5, 2, 7, 8]));