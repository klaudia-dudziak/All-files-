const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;
let idI;

const timer= () => {
if(!active) {
    active = !active;
    btnStart.textContent = 'Pauza';
    idI = setInterval(start, 10);
} else {
    active = !active;
    btnStart.textContent = 'Start';
    clearInterval(idI)
}
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2)
}
   
const reset = () => {
    btnReset.textContent = 'Reset';
    panel.textContent = '---';
    clearInterval(idI)
    time = 0;
    active = false;
}

btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset)