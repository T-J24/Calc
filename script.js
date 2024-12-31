let display = document.getElementById('display');
let expression = ''; // Store the entire expression

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function setOperator(op) {
    if (expression === '') return;
    expression += op;
    display.value = expression;
}

function calculate() {
    if (expression === '') return;

    try {
        // Use eval() with caution, but it's suitable here for basic math
        let result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
            expression = '';
            return;
        }

        display.value = result;
        expression = result.toString(); // Store result for further calculations
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
