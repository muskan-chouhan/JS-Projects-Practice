function str_con_cat(str1, str2) {
  
             if(str1.length == str2.length){
               return str1 + str2
             }

        if (str1.length > str2.length ) {
             part1 = str1.slice(-str2.length)
              return part1 + str2

        } else if (str1.length < str2.length ) {
            part2 = str2.slice(-str1.length)
              return str1+ part2
        }
           
}

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ac", "JS"));
console.log(str_con_cat("ab", "cdef"));

//
