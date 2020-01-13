const btnCreate = document.createElement('button');
const btnClear = document.createElement('button');

document.body.appendChild(btnCreate);
document.body.appendChild(btnClear);

btnCreate.textContent = "Stwórz liste";
btnClear.textContent = "Wyczyść";

btnCreate.style.fontSize = 20 + "px";
btnClear.style.fontSize = 20 + "px";

const ull = document.createElement('ul');
document.body.appendChild(ull);

let size = 10;
let x = 1;

const add = () => {
    for( i = 0; i <= 10; i++) {
        const lii = document.createElement('li');
        lii.textContent = `To jest ${x++} element listy`;
        document.querySelector('ul').appendChild(lii);
        lii.style.fontSize = size++ + 'px';
    }
}
btnCreate.addEventListener('click',add);

const clean = () => {
    ull.textContent = " ";
    x = 1;
    size = 10;
}
btnClear.addEventListener('click',clean);