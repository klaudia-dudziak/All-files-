let red = 255;
let green = 255;
let blue = 255;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
/* SWITCH
    switch (e.keyCode) {
        case 38: 
            document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red }, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`;
        break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red }, ${green > 0 ? --green : green }, ${blue > 0 ? --blue : blue})`;
        break;
    }
*/  
}
window.addEventListener("keydown", changeColor);

/*
Instrukcja IF
if(e.keyCode === 40 && red>0) {
    red-=5;
    green-=5;
    blue-=5;
}
else if (e.keyCode === 38 && red<255) {
    red+=5;
    green+=5;
    blue+=5;
}
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; */
