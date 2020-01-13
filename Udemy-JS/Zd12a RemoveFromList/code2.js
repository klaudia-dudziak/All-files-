const lis = document.querySelectorAll('li');
const btns = document.querySelectorAll('button');

const remove = (e) => {
    e.target.parentNode.remove();

}
btns.forEach(btn => btn.addEventListener('click', remove))
