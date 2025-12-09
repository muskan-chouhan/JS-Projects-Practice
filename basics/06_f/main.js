// It is divisible by 400, OR
// It is divisible by 4 but not divisible by 100


const y = 2025;

if (y % 400 === 0) {
    console.log("leap year");
} 
else if (y % 100 === 0) {
    console.log("not leap year");
} 
else if (y % 4 === 0) {
    console.log("leap year");
} 
else {
    console.log("not leap year");
}


//type 2
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));