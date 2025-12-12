function check(p, q, r){
       return (p % 10 === q % 10) || (p % 10 === r % 10) || (q % 10 === r % 10);
}
console.log(check(22,42,32));
