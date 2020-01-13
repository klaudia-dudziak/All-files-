const input = document.querySelector('input');
const btn = document.querySelector('form button');
let counter = document.querySelector('h1 span');
const ull = document.querySelector('ul')
const toDoList = [];

const add = (e) => {
    e.preventDefault();
    let lii = document.createElement('li');
    lii.innerHTML = input.value + ' <button>usuń</button>';
    toDoList.push(lii);
    ull.appendChild(lii);
    input.value = "";
    counter.textContent = toDoList.length;
    lii.querySelector('button').addEventListener('click', remove)
}
btn.addEventListener('click', add);

const remove = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    counter.textContent = toDoList.length;
    e.target.parentNode.remove();
}