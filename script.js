var input_string = '';
var all_input = '';
var sign = '+';
var number1 = 0;
var operator = '';
var number2 = 0;
var result = 0;

function setInput(input) {

    if (input.match(/[0-9.]/)) {

        if ((input == '0' && (all_input == '' || input_string == '')) || (input == '.' && input_string.includes('.'))) {

        } else {

            input_string += input;
            all_input += input;
            showInput();
        }
    }

    if (all_input != '') {

        switch (input) {
            case 'b':
                var char = all_input.charAt(all_input.length - 1);
                if (char.match(/[0-9.]/)) {
                    input_string = input_string.substring(0, input_string.length - 1);
                } else {
                    if (char == '-' && all_input == '-') {
                        input_string = input_string.substring(0, input_string.length - 1);
                    }
                    operator = '';
                }
                all_input = all_input.substring(0, all_input.length - 1);
                showInput();
                break;
            case 'c':
                reset();
                showInput();
                break;
            case '^':
            case '-':
            case '/':
            case '*':
            case '+':

                if (all_input == '-') {
                    break;
                }

                if (operator == '') {
                    number1 = parseFloat(input_string);
                    input_string = '';
                    operator = input;
                    all_input += input;
                    showInput();
                } else {
                    if (input_string != '') {
                        number2 = parseFloat(input_string);
                        computing();
                        input_string = '';
                        operator = input;
                        all_input = result + input;
                        showInput();
                    } else {
                        operator = input;
                        all_input = all_input.substring(0, all_input.length - 1) + input;
                        showInput();

                    }

                }

                break;

            case '%':
                operator = '%';

            case '=':
                if (number1 != 0 && operator != '') {

                    number2 = parseFloat(input_string);
                    computing();
                    input_string = result+'';
                    all_input = result+'';
                    showInput();
                    operator = '';
                    break;
                }
        }
    } else {
        if (input == '-') {
            input_string += input;
            all_input += input;
            showInput();
        }
    }

}

function showInput() {

    document.getElementById('input').value = all_input;

}

function computing() {

    switch (operator) {
        case '^':
            result = 1;
            for (i = 0; i < number2; i++) {
                result = result * number1;
            }
            if (sign == '-') {
                result *= -1;
            }
            break;

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

    number1 = result;
    number2 = 0;
}

function reset() {

    all_input = '';
    input_string = '';
    sign = '+';
    number1 = 0;
    operator = '';
    number2 = 0;
    result = 0;

}