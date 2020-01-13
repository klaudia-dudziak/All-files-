const SpnText = document.querySelector('.text');
const SpnCursor = document.querySelector('.cursor');
const txt = ['Dzień Dobry!!', 'Fajnie, że jesteś :)', 'Zaczynamy..!'];

let wordIndex = 0;
let letterIndex = 0;

const textTyping = () => {
    if(wordIndex >= 0) {
    SpnText.textContent += txt[wordIndex][letterIndex] 
    }
    letterIndex++;
    if(letterIndex === txt[wordIndex].length) {
        wordIndex++;
        if(wordIndex === txt.length) return;
        return setTimeout( () => {
            letterIndex = 0; // zeby poczekało
            SpnText.textContent = '';
            textTyping();
        }, 2000)
    }
    setTimeout(textTyping, 100)
}
textTyping();

const cursorAnimation = () => {
    SpnCursor.classList.toggle('active')
}

const cursorInterval = setInterval(cursorAnimation, 200)