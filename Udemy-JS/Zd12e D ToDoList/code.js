const form = document.querySelector('form');
const input = document.querySelector('input.add');
const inputSearch = document.querySelector('input.search');
const ull = document.querySelector('ul');
const counter = document.querySelector('h1 span');
const liList = document.getElementsByClassName('newLi');

const removeTask = (e) => {
    e.target.parentNode.remove();
    counter.textContent = liList.length;
}

const addTask = (e) => {
    e.preventDefault();
    const writeTask = input.value;
    if(writeTask === "") return;
    const newLi = document.createElement('li');
    newLi.className = 'newLi';
    newLi.innerHTML = writeTask + "  " + "<button>x</button>";
    ull.appendChild(newLi);
    input.value = "";
    counter.textContent = liList.length;
    document.querySelectorAll('li button').forEach( item => item.addEventListener('click', removeTask));
}
form.addEventListener('submit', addTask);

const search = () => {
    const inputText = inputSearch.value.toLowerCase();
    let allLi = [...liList];
    allLi = allLi.filter(item => item.textContent.toLowerCase().includes(inputText));
    counter.textContent = allLi.length;
    ull.textContent = "";
    allLi.forEach( item => ull.appendChild(item));
}
inputSearch.addEventListener('input', search);


