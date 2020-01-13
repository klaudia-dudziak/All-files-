const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnAdvice = document.querySelector('.showAdvice');
const btnOption = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const advices = [];

const addAdvice = (e) => {
    e.preventDefault();
    const newInput = input.value;
    if(input.value.length) {
        for( advice of advices) {
         if( advice === NewAdvice){
             alert('to już jest');
             return
         }
     }
}
    if(input.value.length /* !== 0 */) {
        alert (`Dosałeś: ${newInput}.`)
    } else {
        alert (`Nic nie dodałeś`)
    }
    advices.push(newInput);
   input.value = " ";
 }
btnAdd.addEventListener('click', addAdvice)

const showAdvice = () => {
    const advice = Math.floor(Math.random() * advices.length)
    h1.textContent = `Myślę, że ${advices[advice]}`
    if(advices.length == 0) { 
        h1.textContent = `To za dużo na  mój procesor.`;
    }
}
btnAdvice.addEventListener('click', showAdvice)

const showOption = () => {
    h1.textContent = `${advices}`;
    if( advices.length == 0) {
        alert(`Brak zdeklarowanych możliwości`)
    }
}
btnOption.addEventListener('click', showOption)

const clear = () => {
    names = "";
}
btnClean.addEventListener('click', clear)