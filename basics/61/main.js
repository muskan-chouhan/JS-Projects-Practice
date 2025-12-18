function nop(str) {

    // agar first character 'P' ho → remove karo
    if (str.slice(0, 1) === "P") {
        str = str.slice(1);
    }

    // agar last character 'P' ho → remove karo
    if (str.slice(-1) === "P") {
        str = str.slice(0, -1);
    }

    return str;
}

console.log(nop("PythonP"));   // ython
console.log(nop("Python"));    // ython
console.log(nop("JavaP"));     // Java
console.log(nop("Java"));      // Java

//
function remove_P(str) {

    let start = 0;
    let end = str.length;

    if (str[0] === 'P') {
        start = 1;
    }

    if (str[str.length - 1] === 'P') {
        end = str.length - 1;
    }

    return str.slice(start, end);
}

console.log(remove_P("PythonP")); // ython
console.log(remove_P("Python"));  // ython
console.log(remove_P("JavaP"));   // Java
console.log(remove_P("Java"));    // Java
console.log(remove_P("P"));       // ""


//
// const remove_P = str => {
//   if (str.startsWith('P')) str = str.slice(1);
//   if (str.endsWith('P')) str = str.slice(0, -1);
//   return str;
// };
