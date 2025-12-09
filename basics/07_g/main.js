function myFunction() {

let guessNum = prompt("Guess the number between 1 and 10 inclusive");

let ranNum = Math.floor(Math.random()*10 +1)
 

if(guessNum === ranNum){
    document.getElementById("num").innerHTML= "Good Work";

}
else{
    document.getElementById("num").innerHTML= `Not matched , the number was ${ranNum}`;
}


}