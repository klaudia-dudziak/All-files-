const form = document.querySelector('form');
const inputAdd = document.querySelector('input.add');
const inputSearch = document.querySelector('input.search');
const ull = document.querySelector('ol');
const counter = document.querySelector('h1 span');
const liList = document.getElementsByClassName('newLi');
const toDoList = [];

const add = (e) => {
    e.preventDefault();
    let lii = document.createElement('li');
    lii.innerHTML = inputAdd.value + ' <button>x</button>';
    toDoList.push(lii);
    ull.appendChild(lii);
    inputAdd.value = "";
    counter.textContent = toDoList.length;
    lii.querySelector('button').addEventListener('click', remove);
}
form.addEventListener('submit', add)

const remove = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    counter.textContent = toDoList.length;
    e.target.parentNode.remove();
}

const fillter = () => {
    ull.textContent = "";
    const lowerInput = inputSearch.value.toLowerCase();
    const task = toDoList.filter(item => item.textContent.toLowerCase().includes(lowerInput));
    task.forEach(item => ull.appendChild(item));
    counter.textContent = ull.length;
}
inputSearch.addEventListener('input', fillter);
