const form = document.getElementById("numForm");
const input = document.getElementById("number");
const result = document.querySelector(".result");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const number = parseInt(input.value); // value yaha leni chahiye

    // Validation
    if (isNaN(number)) {
        result.innerHTML = "Please enter valid number";
    } else if (number % 2 === 0) {
        result.innerHTML = "Number is EVEN";
    } else {
        result.innerHTML = "Number is ODD";
    }
});
