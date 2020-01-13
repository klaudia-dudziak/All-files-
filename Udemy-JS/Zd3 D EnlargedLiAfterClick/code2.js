const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];
let size = 10;

const larger = () => {
    size++;
    for(i=0; i<=10; i++) {
    li[i].style.display = "block";
    li[i].style.fontSize = size + 'px';
    }
}
btn.addEventListener('click', larger);