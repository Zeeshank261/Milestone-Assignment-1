document.getElementById('clickToChange').addEventListener('click', function() {
    // toggle the text 'PW Skills' and 'The most affordable learning platform'
    if (this.textContent === 'The most affordable learning platform') {
        this.textContent = 'PW Skills';
    } else {
        this.textContent = 'The most affordable learning platform';
    }
});