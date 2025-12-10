const  multiplyBy = () => {
    let numone = Number(document.getElementById("firstNumber").value);
    let numtwo = Number(document.getElementById("secondNumber").value);

    if (isNaN(numone) || isNaN(numtwo)) {
        document.getElementById("result").innerHTML = "Enter only numbers!";
    } else {
        document.getElementById("result").innerHTML = numone * numtwo;
    }
}

function divideBy() {
    let numone = Number(document.getElementById("firstNumber").value);
    let numtwo = Number(document.getElementById("secondNumber").value);

    if (isNaN(numone) || isNaN(numtwo)) {
        document.getElementById("result").innerHTML = "Enter only numbers!";
    } 
    else if (numtwo === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero!";
    }
    else {
        document.getElementById("result").innerHTML = numone / numtwo;
    }
}
