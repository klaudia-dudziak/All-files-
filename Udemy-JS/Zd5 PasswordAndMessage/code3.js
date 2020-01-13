const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna", "ania"];
const messages = ["wyjechałam </3 ", "piękna pora roku", "hello"];

const show = () => {
    div.textContent = ' ';
    for(i = 0; i <= messages.length ; i++){
        if(input.value == passwords[i]){
            div.textContent = messages[i]
        } 
    }
}
input.addEventListener('input',show)