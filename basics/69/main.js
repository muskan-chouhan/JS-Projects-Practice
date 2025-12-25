function check(nums){
    let first = nums[0];
    let last  = nums[nums.length - 1];

    let largest;
    if (first > last) {
        largest = first;
    } else {
        largest = last;
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = largest;
    }

    return nums;
}

console.log(check([2,3,4,5,5]));


// function check(nums){
//        let r = ""
//         first = nums.slice(0,1)
//         middle = nums.slice(1,nums.length-1)
//         last = nums.slice(nums.length-1)
//         if(first > last){
//          r += nums.replace(first)
//           console.log(r);
          
//         }
//         return r;
// }


// console.log(check([2,3,4,5,5]));



// function all_max(nums) 
//  {
//     var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

//     nums[0] = max_val;
//     nums[1] = max_val;
//     nums[2] = max_val;

//     return nums;
// }
// console.log(all_max([20, 30, 40]));
// console.log(all_max([-7, -9, 0]));
// console.log(all_max([12, 10, 3]));