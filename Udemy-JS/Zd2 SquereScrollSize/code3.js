const squere = document.createElement('div');//

let size = 50;
let active = false;
squere.style.width = size + "px";//
squere.style.height = size + "px";//

const scroll = () => {
    if(size <= 20) {
        active = !active;
    } else if(size >= window.innerWidth/2){//
        active = !active;
    }
    if(active) {
        size+=6;
        squere.style.width = size + "px";
        squere.style.height = size + "px";

    } else if(!active){
        size-=6;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }
}
window.addEventListener('scroll', scroll);
document.body.appendChild(squere);