const input = document.querySelector('input');
const btn = document.querySelector('form button');
let counter = document.querySelector('h1 span');
const ull = document.querySelector('ul')
const toDoList = [];

const add = (e) => {
    e.preventDefault();
    const value = input.value;
    if(input.value === "") return;
    const li = document.createElement('li');
    li.className = 'li';
    li.innerHTML = value + "<button>usuń</button>";
    toDoList.push(li);
    ull.appendChild(li);
    input.value = "";
    counter.textContent = toDoList.length;
    renderList();
    li.querySelector('button').addEventListener('click', remove);
}

const remove = (e) => {
    const index = e.target.parentNode.dataset.key;
 toDoList.splice(index, 1)
 taskNumber.textContent = toDoList.length;
 renderList();
}

const renderList = () => {
    ull.textContent = "";
    toDoList.forEach(toDoElement, key => {
       toDoElement.dataset.key = key; // lub id
       ul.appendChild(toDoElement)
   })
}

btn.addEventListener('click', add);