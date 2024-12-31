let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function setOperator(op) {
    if (expression === '') return; // Prevent adding operator at the beginning

    const lastChar = expression.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        expression = expression.slice(0, -1) + op; // Replace last operator if needed
    } else {
        expression += op;
    }
    display.value = expression;
}

function calculate() {
    if (expression === '') return;

    try {
        // Replace any remaining trailing operators before evaluating
        const lastChar = expression.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            expression = expression.slice(0, -1);
        }

        let result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
            expression = '';
            return;
        }

        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = "Error";
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.value = expression;
}
