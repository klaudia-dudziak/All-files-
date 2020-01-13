let number = 100;
document.body.style.backgroundColor = `rgb${number}, ${number}, ${number}`;

const change = (e) => {
    if(e.keyCode === 40 && number >= 0 ) {
        number -=5;
    }
    else if (e.keyCode === 38 && number <= 255) {
        number +=5;
    }
    document.body.style.backgroundColor = `rgb${number}, ${number}, ${number}`;
}
window.addEventListener('keydown', change);

