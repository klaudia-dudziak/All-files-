const btn = document.querySelector('button');
let number = 1;

const add = () => {
    const block = document.createElement('div');
    block.classList.add('div');
    block.textContent = number;
    if(number%5 === 0) {
        block.classList.add('circle')
    }
    number++;
    document.body.appendChild(block)
}
btn.addEventListener('click', add)