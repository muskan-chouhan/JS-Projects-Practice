const checkForm = document.getElementById('checkForm');
const output = document.querySelector('.result');

checkForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = Number(document.querySelector('.input').value);
    
    if (isNaN(number)) {
        output.innerHTML = "Enter correct number";
        document.querySelector('.input').value = "";
        return;   // Stop code here
    }

    // Logic
    if (number > 0) {
        output.innerHTML = "Number is positive";
    } 
    else if (number < 0) {
        output.innerHTML = "Number is negative";
    } 
    else {
        output.innerHTML = "Number is zero";
    }

    checkForm.reset();
    
        // ⬇️ Add THIS line to clear result
    setTimeout(() => {
    output.innerHTML = "";
}, 2000);
});
