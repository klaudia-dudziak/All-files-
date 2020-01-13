const baner = document.querySelector('div');

let size = 200;
let active = false;
baner.style.position = 'fixed';
baner.style.height = size + 'px';
baner.style.width = '100%';
baner.style.backgroundColor = 'green';
baner.style.left = 0;;
baner.style.top = 0;;
document.body.style.height = 10000 + 'px';

const scroll = () => {
    if(size <= 50) {
        active = !active;
    } else if(size >= window.innerWidth/2) {
        active = !active
    }
    if(!active){
        size+=10;
        baner.style.height = size + 'px';
        baner.style.backgroundColor = 'green';
    } else if(active){
        size-=10;
        baner.style.height = size + 'px';
        baner.style.backgroundColor = 'red';
    }
}
window.addEventListener('scroll', scroll)