
function checkMode(a, b, c) {

    // Strict mode
    if (a < b && b < c) {
        return "strict mode";
    }

    // Soft mode
    if (c > b) {
        return "soft mode";
    }

    return "not increasing";
}

console.log(checkMode(10, 15, 31)); // strict mode
console.log(checkMode(24, 22, 31)); // soft mode
console.log(checkMode(22, 22, 31)); // soft mode
console.log(checkMode(5, 5, 5));     // not increasing


function number_order(x, y, z ) {
  if ( y > x && z > y) 
  {
    return "strict mode";    
  }
  else if(z > y) 
   return "Soft mode";
  else
    return "Undefinded";
}

console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));