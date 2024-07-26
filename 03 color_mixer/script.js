const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const submit = document.getElementById('submit');
const message = document.getElementById('message');

submit.addEventListener('click', () => {
    const color1Value = color1.value;
    const color2Value = color2.value;

    switch (color1Value) {
        case 'red':
            switch (color2Value) {
                case 'blue':
                    message.innerHTML = 'purple';
                    break;
                case 'yellow':
                    message.innerHTML = 'orange';
                    break;
                default:
                    message.innerHTML = 'Invalid color combination';
                    break;
            }
            break;
        case 'blue':
            switch (color2Value) {
                case 'red':
                    message.innerHTML = 'purple';
                    break;
                case 'yellow':
                    message.innerHTML = 'green';
                    break;
                default:
                    message.innerHTML = 'Invalid color combination';
                    break;
            }
            break;
        case 'yellow':
            switch (color2Value) {
                case 'red':
                    message.innerHTML = 'orange';
                    break;
                case 'blue':
                    message.innerHTML = 'green';
                    break;
                default:
                    message.innerHTML = 'Invalid color combination';
                    break;
            }
            break;
        default:
            message.innerHTML = 'Invalid color combination';
            break;
    }

});