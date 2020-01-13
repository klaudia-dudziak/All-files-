const input = document.querySelector('input');
const ul = document.querySelectorAll('ul');
const lis = document.querySelectorAll('li');

const searching = (e) => {
    const txtInput = e.target.value.toLowerCase();
    let task = [...lis]
    task = task.forEach(items => items.textContent.toLowerCase().includes(txtInput));
    ul.textContent = "";
    task.forEach(items => ul.appendChild(items));
    
}
input.addEventListener('input', searching)

 