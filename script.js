var input_string = '';
var sign = '+';
var chars = '';
var number1 = 0;
var operator = '';
var number2 = 0;
var result = 0;

function setInput(input) {

    input_string += (input);

    if (input == '=' || input == '%') {

        for (i = 0; i < input_string.length; i++) {

            var char = input_string.charAt(i);

            if (i == 0 && char == '-') {
                sign = '-';
                continue;
            }

            switch (char) {
                case '/':
                case '*':
                case '-':
                case '+':
                    getNumber1OR2(char);
                    break;

                case '%':
                    operator = '%';

                case '=':
                    number2 = parseFloat(chars);
                    chars = '';
                    computing();
                    input_string = result;
                    showInput();

                    reset();

                    return;

                default:
                    chars += char;
            }
        }

    } else {

        if (input == 'c') {

            reset();
            input_string = '';
        }

        showInput();

    }
}

function getNumber1OR2(char) {

    if (number1 == 0) {
        number1 = parseFloat(chars);
        chars = '';
        operator = char;

    } else {

        number2 = parseFloat(chars);
        chars = '';
        operator = char;
        computing();
        number1 = result;
        sign = '+';
    }

}

function showInput() {

    document.getElementById('input').value = input_string;

}

function computing() {

    switch (operator) {
        case '%':
            if (sign == '+') {
                result = (number2/100) * number1;
            } else {
                result = (-1) * (number2/100) * number1;
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

    sign = '+';
    chars = '';
    number1 = 0;
    operator = '';
    number2 = 0;
    result = 0;

}