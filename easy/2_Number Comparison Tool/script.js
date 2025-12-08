const compareForm = document.getElementById('compareForm');
const output = document.querySelector('.output');

compareForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        output.innerHTML = "Please enter valid numbers";
        compareForm.reset();       // clear input fields
        return;
    }

    // Logic
    if (num1 > num2) {
        output.innerHTML = "First number is greater";
    } 
    else if (num2 > num1) {
        output.innerHTML = "Second number is greater";
    } 
    else {
        output.innerHTML = "Both numbers are equal";
    }

    compareForm.reset();   // clear after checking also
});
