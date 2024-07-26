const progressBar = document.getElementById('progress');
const totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progressHeight + '%';
}
