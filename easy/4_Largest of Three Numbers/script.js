const checkForm = document.getElementById('checkForm');
const result = document.getElementById('result');

checkForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const num1 = Number(document.getElementById('firstNumber').value);
    const num2 = Number(document.getElementById('secondNumber').value);
    const num3 = Number(document.getElementById('thirdNumber').value);

    // 1️⃣ EMPTY check → input.value check hota hai
    if (
        document.getElementById('firstNumber').value === "" ||
        document.getElementById('secondNumber').value === "" ||
        document.getElementById('thirdNumber').value === ""
    ) {
        result.innerHTML = "Please enter all numbers!";
        return;
    }

    // 2️⃣ NaN check → user ne text ya blank diya ho
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result.innerHTML = "Only numeric values allowed!";
        return;
    }

    // 3️⃣ Main Logic
    if (num1 > num2 && num1 > num3) {
        result.innerHTML = "First number is greatest";
    } 
    else if (num2 > num1 && num2 > num3) {
        result.innerHTML = "Second number is greatest";
    } 
    else {
        result.innerHTML = "Third number is greatest";
    }

    // 4️⃣ Clear form + result
    checkForm.reset();

    setTimeout(() => {
        result.innerHTML = "";
    }, 2000);
});



//easy way
/*

const checkForm = document.getElementById('checkForm');
const result = document.getElementById('result');

checkForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const v1 = document.getElementById('firstNumber').value;
    const v2 = document.getElementById('secondNumber').value;
    const v3 = document.getElementById('thirdNumber').value;

    if (v1 === "" || v2 === "" || v3 === "") {
        result.textContent = "Please enter all numbers!";
        return;
    }

    const num1 = Number(v1);
    const num2 = Number(v2);
    const num3 = Number(v3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result.textContent = "Only numeric values allowed!";
        return;
    }

    const greatest = Math.max(num1, num2, num3);
    result.textContent = `${greatest} is greatest`;

    checkForm.reset();
});


*/