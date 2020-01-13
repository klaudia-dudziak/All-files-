const btnstart = document.querySelector('.start');
const btnstop = document.querySelector('.stop');
const btnreset = document.querySelector('.reset');
const input = document.querySelector('.wartosc');
let pokazCzas = document.getElementById('pokazCzas');

let minutnik = function() {
    czas = setInterval(function()
    {
        pokazCzas.textContent = input.value;
        input.value--;
        if(input.value <= -1 ){
            clearInterval(czas);
            input.value = '';
            input.style.color = 'black';
            pokazCzas.textContent = 0;
        }
    }, 1000);
    input.style.color = 'lightblue';
}

const zatrzymaj = function() {
    clearInterval(czas)
}

const zresetuj = function() {
    pokazCzas.textContent = 0;
    input.style.color = 'black';
    input.value = '';
}

btnstart.addEventListener('click', minutnik);
btnstop.addEventListener('click', zatrzymaj);
btnreset.addEventListener('click', zresetuj);
