document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    let input = document.getElementById('name').value
    let vowelCount = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === 'a' || input[i].toLowerCase() === 'e' || input[i].toLowerCase() === 'i' || input[i].toLowerCase() === 'o' || input[i].toLowerCase() === 'u') {
            vowelCount++
        }
    }
    document.querySelector('.message').innerText = `Your name contains ${vowelCount} vowels`
})