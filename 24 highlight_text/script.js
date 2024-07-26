const text = document.getElementById('text');
const words = text.innerText.split(' ');
words.forEach(word => {
    if (word.length > 8) {
        text.innerHTML = text.innerHTML.replace(' '+word+' ', ` <span style="background-color: yellow">${word}</span> `);
    }
});