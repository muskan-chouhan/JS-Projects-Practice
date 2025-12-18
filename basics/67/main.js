function reverse3(array) {

 return [array[2], array[1] , array[0]
]
}

console.log(reverse3([5, 4, 3]));

//
const reverse = (array) =>
  array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
console.log(reverse([5, 4, 3]));


function reverseAny(arr) {
  return arr.reverse();
}

console.log(reverseAny([5, 4, 3])); 