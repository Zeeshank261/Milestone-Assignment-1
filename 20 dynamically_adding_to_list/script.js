const list = ["React", "Node.js", "Express", "MongoDB", "Mongoose"];
const button = document.getElementById("add");
const message = document.getElementById("message");
const ol = document.getElementById("list");
let index = 0;
button.addEventListener("click", function() {
    if (index < list.length) {
        const li = document.createElement("li");
        li.textContent = list[index];
        ol.appendChild(li);
        index++;
    } else {
        message.textContent = "All items have been added!";
    }
});