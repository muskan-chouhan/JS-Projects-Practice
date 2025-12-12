function check_range(x, y){
     if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)){
      return true;
   }
}

console.log(check_range(50,56));
