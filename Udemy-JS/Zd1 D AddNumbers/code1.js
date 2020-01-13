const btn = document.querySelector('button');
const ull = document.querySelector('ul');

let number = 1

const addNumber = () => {
    const li = document.createElement('li')
    li.textContent = number; 
    ull.appendChild(li);
    number++;
    if(number%3 == 0) {
        li.classList.add('bigger')
    }
    number = number + 2
 
}

btn.addEventListener('click', addNumber);