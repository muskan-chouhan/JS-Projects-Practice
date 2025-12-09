
function animate_string(){

       let str = document.getElementById("target").innerHTML
setInterval(() => {
  // last letter
  let lastChar = str[str.length - 1];

  // string without last letter
  let rest = str.substring(0, str.length - 1);

  // rotate right
  str = lastChar + rest;

  // show on screen
  document.getElementById("target").innerText = str;

}, 100);  // rotation speed (1000)
}