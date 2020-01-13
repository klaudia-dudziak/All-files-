const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnAdvice = document.querySelector('.showAdvice');
const btnOption = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const advices = [];

// Dodawanie możliwości
const addAdvice = (e) => {
    e.preventDefault();
    const NewAdvice = input.value;
    if(input.value.length) {
    for( advice of advices) {
        if( advice === NewAdvice){
            alert('to już jest');
            return
        }
    }
}
    advices.push(NewAdvice);
    if( NewAdvice == ''){
        alert(`Nic nie dodałeś`)
    } else {
    alert(`dodałeś możliwość: ${NewAdvice}`)
    }
    input.value = "";
}

btnAdd.addEventListener('click', addAdvice);

//Pokazywanie rady (jednej możliwosci)
const showAdv = () => {
    const indexAdvices = Math.floor(Math.random() * advices.length );
    h1.textContent = `${advices[indexAdvices]}`;
    if( advices.length <= 1) {
        h1.textContent = `To za duzo na mój procesor`;
    }
}

btnAdvice.addEventListener('click', showAdv);

//Pokazywanie możliwości (wszystkich wpisanych)
const showOpt = () => {
  if( advices.length == 0) {
      alert(`Brak zdeklarowanych możliwości`)
  } else {
    alert(`Twoje możliwości to: ${advices}, `)
  }
}

btnOption.addEventListener('click', showOpt);

//Czyszczenie tablicy 
const cleaner = () => {
    advices.length == 0;
}

btnClean.addEventListener('click', cleaner);

