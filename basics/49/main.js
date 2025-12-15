function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");
  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;       
}

//type 
function equal_pt(str) {
    let pCount = 0;
    let tCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'p') {
            pCount++;
        }
        if (str[i] === 't') {
            tCount++;
        }
    }

    return pCount === tCount;
}

console.log(equal_pt("paatpss")); // false
console.log(equal_pt("paatps"));  // true
