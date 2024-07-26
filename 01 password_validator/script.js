document.getElementById('submit').onclick = function() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    if (password === confirmPassword) {
        document.getElementById('message').innerHTML = '<p style="color:green">Password is valid</p>';
    } else {
        document.getElementById('message').innerHTML = '<p style="color:red">Password is not valid</p>';
    }

}