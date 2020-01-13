const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const lis = [...document.querySelectorAll('li')];
let size = 15;

const enlarge = () => {
    lis.forEach(li => li.style.display = "block");
    lis.forEach(li => li.style.fontSize = size + 'px')
    size++;
}
btn.addEventListener('click', enlarge)