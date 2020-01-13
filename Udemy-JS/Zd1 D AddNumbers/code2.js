const btn = document.querySelector('button');
const ul = document.querySelector('ul')
let number = 1;

const add = () => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = number;
    if(number%3 == 0) {
        li.classList.add('bigger');
    }
    number += 2;
}

btn.addEventListener('click', add)