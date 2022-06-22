var input_string = '';
var sign = '+';
var number1 = 0;
var operator = '';
var number2 = 0;
var result = 0;

function setInput(input) {

    if (input.match(/[0-9.]/)) {

        input_string += (input);
        showInput();
    }

    switch (input) {
        case 'c':
            reset();
            showInput();
            break;
        case '-':
            if (input_string == '') {
                input_string += (input);
                showInput();
                break;
            }
        case '/':
        case '*':
        case '+':
            number1 = parseFloat(input_string);
            input_string = '';
            operator = input;
            break;

        case '%':
            operator = '%';

        case '=':
            number2 = parseFloat(input_string);

            computing();
            input_string = result;
            showInput();

            number1 = result;
            operator = '';

            break;
    }

}

function showInput() {

    document.getElementById('input').value = input_string;

}

function computing() {

    switch (operator) {
        case '%':
            if (sign == '+') {
                result = (number2 / 100) * number1;
            } else {
                result = (-1) * (number2 / 100) * number1;
            }

            break;

        case '/':
            if (sign == '+') {
                result = number1 / number2;
            } else {
                result = (-1) * (number1 / number2);
            }

            break;
        case '*':
            if (sign == '+') {
                result = number1 * number2;
            } else {
                result = (-1) * (number1 * number2);
            }

            break;
        case '-':
            if (sign == '+') {
                result = number1 - number2;
            } else {
                result = (-1) * (number1 + number2);
            }

            break;
        case '+':
            if (sign == '+') {
                result = number1 + number2;
            } else {
                result = (-1) * (number1 - number2);
            }

            break;
    }
}

function reset() {

    input_string = '';
    sign = '+';
    number1 = 0;
    operator = '';
    number2 = 0;
    result = 0;

}