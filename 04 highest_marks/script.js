document.querySelector('[type="submit"]').addEventListener('click', (e) => {
    let marks = document.querySelector('#marks').value.split(' ').map(Number);
    let highestMarks = 
    (marks[0] > marks[1] && marks[0] > marks[2] && marks[0] > marks[3] && marks[0] > marks[4]) ? 
    marks[0] : (marks[1] > marks[2] && marks[1] > marks[3] && marks[1] > marks[4]) ? 
    marks[1] : (marks[2] > marks[3] && marks[2] > marks[4]) ? 
    marks[2] : (marks[3] > marks[4]) ? 
    marks[3] : marks[4];
    console.log(highestMarks);
});