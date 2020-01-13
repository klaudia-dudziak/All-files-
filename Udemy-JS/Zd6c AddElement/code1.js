const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = [];

const addElement = (e) => {
    e.preventDefault();
    const newInput = input.value;
    for(name of names) {
    if(input.value === name) {
         alert ('To już jest')
         return
     }}
    names.push(newInput);
    div.textContent += newInput + ", ";
    input.value = " ";
}
btn.addEventListener('click', addElement);

