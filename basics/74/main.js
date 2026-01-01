

function check(nums) {
   return (nums[0] === 30 && nums[1] === 30) ||
          (nums[0] === 40 && nums[1] === 40);
}

console.log(check([30, 30])); 
console.log(check([40, 40])); 
console.log(check([30, 40])); 
console.log(check([30]));     
console.log(check([]));       



