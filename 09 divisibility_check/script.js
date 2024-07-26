const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    result.innerHTML = '';
    const numbers = this.numbers.value.split(' ');
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
            const li = document.createElement('li');
            li.textContent = numbers[i];
            result.appendChild(li);
        }
    }
});