const check = (str) => {
      if (str.length < 4)
  {
    return false;
  }
     front = str.substring(0, 4);
     if(front === "Java"){
        return true
     } else{
         return false;
     }
}

console.log(check("Javascript"));
console.log(check("python"));


//type 2
const startsWithJava = (str) => {
    return str.startsWith("Java");
}

console.log(startsWithJava("JavaScript")); // true
console.log(startsWithJava("Hello"));      // false
