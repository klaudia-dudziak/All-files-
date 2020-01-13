const btn = document.querySelector('button');
const section = document.querySelector('section');

let chars = 'ABCDEFGHIJKL0123456789'
const ull = document.createElement('ul');
section.appendChild(ull);

const generate = () => {
    for(let i = 0; i <= 1000; i++) {
        const lii = document.createElement('li');
        ull.appendChild(lii);

        for(let b = 0; b <= 14; b++){
            let code = Math.floor(Math.random()*chars.length);
            lii.textContent += chars[code]; //
        }
    }
} 
btn.addEventListener('click', generate) 

