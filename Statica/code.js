var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
 
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const input = document.querySelector('input');
const tickerContainer = document.querySelector('.ticker-container');
const list = [ 'div.ticker', 'div.ticker'];
const colors = ['red', 'green', 'blue', 'lightblue', 'lightpink', 'plum', 'yellow', 'orange', 'gray', 'mediumslateblue', 'mediumvioletred']

const add = (e) => {
    if(list.length >= 9 ){
        return
    }
    if(e.keyCode === 13 && input.value.length > 0) {
    e.preventDefault();
 
    let div = document.createElement('div');
    div.classList.add('ticker');
    tickerContainer.appendChild(div);
    list.push(div);

    let squere = document.createElement('div');
    squere.classList.add('squere');
    div.appendChild(squere);
    const i = Math.floor(Math.random() * colors.length );
    squere.style.backgroundColor = `${colors[i]}`;

    let tickerContent = document.createElement('p');
    tickerContent.textContent = `${input.value}`;
    div.appendChild(tickerContent);

    let deleteTicker = document.createElement('span');
    deleteTicker.innerHTML = '&times;';
    deleteTicker.classList.add('delete');
    div.appendChild(deleteTicker);
    
    input.value = "";
    }
    document.querySelectorAll('.delete').forEach( item => item.addEventListener('click', remove));
}
input.addEventListener('keypress', add)

const remove = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    list.splice(index, 1);
}
 
