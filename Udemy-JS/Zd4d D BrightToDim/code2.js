let color = 150;
    document.body.style.backgroundColor = `rgb(${color} ${color} ${color})`
const change = (e) => {
    if(e.keyCode === 40 && color >= 0) {
        color-=5;
        
    } else if (e.keyCode === 38 && color <= 255) {
        color+=5;
    }
    document.body.style.backgroundColor = `rgb(${color} ${color} ${color})`

 }
window.addEventListener('keydown', change)