const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const submit = document.getElementById('submit');
const message = document.getElementById('message');

submit.addEventListener('click', function() {
    let result;
    switch (operator.value) {
        case '+':
            result = parseInt(num1.value) + parseInt(num2.value);
            break;
        case '-':
            result = parseInt(num1.value) - parseInt(num2.value);
            break;
        case '*':
            result = parseInt(num1.value) * parseInt(num2.value);
            break;
        case '/':
            result = parseInt(num1.value) / parseInt(num2.value);
            break;
        default:
            result = 'Invalid operator';
    }
    message.innerHTML = `The result is: ${result}`;
    
});