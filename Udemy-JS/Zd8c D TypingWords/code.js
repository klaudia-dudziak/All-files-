const SpnText = document.querySelector('.text');
const SpnCursor = document.querySelector('.cursor');
const txt = ['Dzień Dobry!!', 'Fajnie, że jesteś :)', 'Zaczynamy..!'];

let textIndex = -10; //zeby poczekało na poczatku
let i = 0;


const addLetter = () => {
    if(textIndex >= 0) {
    SpnText.textContent  += txt[i][textIndex];
    }
    textIndex++;
    if(textIndex === txt[i].length)  {
        
    i++;
    if(i === txt.length) return;
    return setTimeout(() => {
        textIndex = -10; // zeby poczekało
        SpnText.textContent = '';
        addLetter();
    }, 2000)
 
    }
    setTimeout(addLetter, 100);
}

addLetter();

const addCoursor = () => {
    SpnCursor.classList.toggle('active');
}

const CursorTyping = setInterval(addCoursor, 200);
 
