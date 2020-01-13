const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');
const row = [];

const add = (e) => {
    e.preventDefault();
    for(let i = 0; i <= row.length; i++)
        if(input.value === row[i]){
            alert('To juz jest');
            input.value = "";
            return; 
    }
    const newWord = input.value;
    row.push(newWord);
    div.textContent = row.join(', ');
    input.value = "";
}
btn.addEventListener('click', add)