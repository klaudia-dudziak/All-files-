const btn = document.querySelector('button');
let number = 1;

const addSquere = () => {
    const squere = document.createElement('div');
    squere.textContent = number;
    if(number%5 == 0){
        squere.classList.add('circle');//
    }
    number++;
    document.body.appendChild(squere);//
}
 btn.addEventListener('click', addSquere)
