let display = document.getElementById('display');
let expression = '';

function appendDisplay(num) {
    expression += num;
    display.value = expression;
    console.log(expression);
}


function calculate() {
    let result = eval(expression);
    display.value = result;

}

function clearDisplay() {
    display.value = '';
    expression = '';
}

function deleteLast() {
    expression = expression.substring(0, expression.length - 1);
    display.value = expression;
}

