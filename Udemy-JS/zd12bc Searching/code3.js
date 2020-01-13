const input = document.querySelector('input');
const ull = document.querySelector('ul');
const liElements = [...document.querySelectorAll('li')];

const fillter = () => {
    ull.textContent = "";
    const lowerInput = input.value.toLowerCase();
    const task = liElements.filter(item => item.textContent.toLowerCase().includes(lowerInput));
    task.forEach(item => ull.appendChild(item));
}
input.addEventListener('input', fillter)