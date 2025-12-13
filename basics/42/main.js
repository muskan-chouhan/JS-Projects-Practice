function check (x,y){
    return  x % 7 === 0 || x % 11 === 0 || y % 7 === 0 || y % 11 === 0
}

console.log(check(14, 21));
console.log(check(14, 20));
function valCheck (a, b) {
if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
}
else
return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));