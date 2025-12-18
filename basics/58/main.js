
function str_con_cat(str1, str2) {

    if (str1.length === str2.length) {
        return str1 + str2;
    }

    if (str1.length > str2.length) {
        let s = str1.slice(-str2.length);
        return s + str2;
    }

    if (str2.length > str1.length) {
        let r = str2.slice(-str1.length);
        return str1 + r;
    }
}

console.log(str_con_cat("Python", "JS")); // onJS
console.log(str_con_cat("ab", "cdef"));   // abef
