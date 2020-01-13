const SpnText = document.querySelector('.text');
const SpnCursor = document.querySelector('.cursor');
const txt = ['Dzień Dobry!!  ', 'Fajnie, że jesteś :)  ', 'Zaczynamy..!  '];

let letter = 0;
let word = 0;

const writing = () => {
    if(letter >= 0){
    SpnText.textContent += txt[word][letter]
    }
    letter++;
    if(letter === txt[word].length){
        SpnText.textContent = "";
        letter = -5;
        word++;
    } 
    if (word === txt.length){
        clearInterval(main);
    }
}
const main = setInterval(writing, 200)

const cursor = () => {
    SpnCursor.classList.toggle('active')
}
setInterval(cursor, 300)