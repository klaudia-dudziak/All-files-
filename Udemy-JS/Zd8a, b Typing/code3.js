const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet';

let i = 0;

const typing = () => {
    spnText.textContent += txt[i];
    i++;
    if(i === txt.length) clearInterval(typingInterval)
}
const typingInterval = setInterval(typing, 100);

const cursor = () => {
    spnCursor.classList.toggle('active')
}
setInterval(cursor, 200)
