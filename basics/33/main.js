function last_digit(x, y, z) {
if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
    } else {
    // If any of the numbers is not greater than 0, return false
    return false;
  }
}

console.log(last_digit(20,30,330));
