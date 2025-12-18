function city_name(str) {
    if (str.slice(0,3) === "Los" || str.slice(0,3) === "New") {
        return str;
    }
    return "";   // blank
}

console.log(city_name("New York"));     // New York
console.log(city_name("Los Angeles"));  // Los Angeles
console.log(city_name("London"));       // ""


//second type
function city_name(str) {
  if (
      str.length >= 3 &&
      (str.substring(0, 3) == 'Los' || str.substring(0, 3) == 'New')
     ) {
      return str;
  }
  return '';
}