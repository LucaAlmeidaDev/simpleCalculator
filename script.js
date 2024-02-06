let display = document.getElementById('display')
let memory = '';
let operator = '';


function NumDisplay(value) {
    display.value += value;
}

function Remove() {
    display.value = '';
}

function SetOperator(op) {
    if (display.value !== '') {
        memory = display.value;
        operator = op;
        display.value = memory + ' ' + operator + ' ';
    }
}

function PerformOperation() {
    if (memory !== '' && display.value !== '') {
        let parts = display.value.split(' ');
        let firstOperand = parseFloat(memory);
        let secondOperand = parseFloat(parts[2]);
        let operation = parts[1];

        switch (operation) {
            case '+':
                display.value = firstOperand + secondOperand;
                break;
            case '-':
                display.value = firstOperand - secondOperand;
                break;
            case '*':
                display.value = firstOperand * secondOperand;
                break;
            case '%':
                display.value = firstOperand * (secondOperand / 100);
                break;
            case '/':
                if (secondOperand !== 0) {
                    display.value = firstOperand / secondOperand;
                } else {
                    display.value = 'Error';
                }
                break;
            default:
                display.value = 'Error';
                break;
        }

        memory = '';
        operator = '';
    }
}
