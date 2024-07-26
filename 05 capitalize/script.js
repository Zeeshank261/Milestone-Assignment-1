
document.querySelector('[type="submit"]').addEventListener('click', function() {
    let userName = document.getElementById('name').value
    let firstLetter = userName.charAt(0)
    let firstLetterCapitalized = (firstLetter >= 'a' && firstLetter <= 'z') ? firstLetter.toUpperCase() : firstLetter
    let formattedName = firstLetterCapitalized + userName.slice(1)
    document.querySelector('.message').innerText = `Your name is ${formattedName}`
})