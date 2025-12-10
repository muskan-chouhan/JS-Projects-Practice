
const addPy = (str) => {
    return str.startsWith("Py") ? str : "Py" + str;
}

console.log(addPy("thon"));     // Python
console.log(addPy("Pyramid"));  // Pyramid
console.log(addPy("Hello"));    // PyHello


function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));
