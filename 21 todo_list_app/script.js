const list = document.getElementById('list');
const todo = document.getElementById('todo');
const add = document.getElementById('add');

add.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = todo.value;
    list.appendChild(li);
    todo.value = '';
});