const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;
let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "gray";
    let drawActive = true;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);
    
})

div.addEventListener('mousemove', (e) => {
    if(drawActive) {
    
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX - 100 }px`;
    div.style.top = `${divY - 100 }px`;
    }
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "black";
    let drawActive = false;
})
 