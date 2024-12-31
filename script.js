let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function setOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = prev / curr; break;
        default: return;
    }

    currentInput = result.toString();
    display.value = currentInput;
    operator = '';
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
    operator = '';
    previousInput = '';
}
