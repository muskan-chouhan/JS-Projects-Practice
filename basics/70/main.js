function middle_elements(a, b){
            //   a.length == 3 && b.length == 3

               first = a[1]
               second  = b[1]
              return [first ,second]

}

console.log(middle_elements([1, 2, 3], [1, 5, 6]));



function middleElements(arr1, arr2) {
    return [arr1[1], arr2[1]];
}

console.log(middleElements([1, 2, 3], [4, 5, 6]));   // [2, 5]
console.log(middleElements([10, 20, 30], [7, 8, 9])); // [20, 8]
