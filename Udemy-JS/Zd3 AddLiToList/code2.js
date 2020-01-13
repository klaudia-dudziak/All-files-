const btnStart = document.createElement('button')
btnStart.textContent = "Stwórz listę"
document.body.appendChild(btnStart)

const btnReset = document.createElement('button')
btnReset.textContent = "Wyczyść"
document.body.appendChild(btnReset)

const ul = document.createElement('ul')
document.body.appendChild(ul);

let size = 15;
let order = 1;//
const add =() => {
    for(let i = 1; i <= 10; i++) { //
    const li = document.createElement('li');
    li.textContent = `To jest ${order++} element listy`;
    li.style.fontSize = size++ + "px";
    ul.appendChild(li);
    }
}

const reset =() => {
 ul.textContent = " "
 size = 15;
 order = 1;
}

btnStart.addEventListener('click', add);
btnReset.addEventListener('click', reset);