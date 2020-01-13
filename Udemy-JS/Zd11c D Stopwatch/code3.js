const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let mili = 0;
let seconds = 0;
let active = true;

const stopwatch = () => {
    if(active){
        btnStart.textContent = 'Pauza';
        inter = setInterval(start, 10);
        active = !active;
    } else if (!active) {
        btnStart.textContent = 'Start';
        clearInterval(inter);
        active = !active;
    }
}
btnStart.addEventListener('click', stopwatch)

const start = () => {
    mili++;
    if(mili == 99) {
        mili = 0;
        seconds++;
    }
    if(mili <= 9) {
        mili = "0" + mili;
    }
    panel.textContent = `${seconds}:${mili}`;
}

const reset = () => {
    clearInterval(inter);
    mili = 0;
    seconds = 0;
    panel.textContent = "---";
    active = true;
    btnStart.textContent = 'Start';
}
btnReset.addEventListener('click', reset)