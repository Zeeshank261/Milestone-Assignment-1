const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const message = document.getElementById('message');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (email.value.includes('@') && password.value.length >= 8) {
        message.textContent = 'Valid email and password!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid email or password!';
        message.style.color = 'red';
    }
});