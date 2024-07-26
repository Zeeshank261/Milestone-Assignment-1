const form = document.querySelector('form');
const triangle = document.getElementById('triangle');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const rows = document.getElementById('rows').value;
    let output = '';
    for (let i = rows; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += '*';
        }
        output += '<br>';
    }
    triangle.innerHTML = output;
});