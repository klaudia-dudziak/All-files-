const input = document.querySelector('input');
const ull = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = () => {
    const searchText = input.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(items => items.textContent.toLowerCase().includes(searchText))
    ull.textContent = "";
    tasks.forEach(items => ull.appendChild(items));
   }
   
   input.addEventListener('input', searchTask)




