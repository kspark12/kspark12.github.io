let expression = '';

function appendValue(value) {
    expression += value;
    document.getElementById('result').value = expression;
}

function clearResult() {
    expression = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}
