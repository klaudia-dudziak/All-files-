const SpnText = document.querySelector('.text');
const SpnCursor = document.querySelector('.cursor');
const txt = ['Dzień Dobry!!', 'Fajnie, że jesteś :)', 'Zaczynamy..!'];

let i = 0;
let b = 0;

const textTyping = () => {
    SpnText.textContent += txt[i][b] 
    b++;
    if(b === txt[i].length) {
        i++;
        if(i === txt.length) return;
        return setTimeout( () => {
            b = 0; 
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