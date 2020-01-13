const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna", "ania"];
const messages = ["wyjechałam </3 ", "piękna pora roku", "hello"];

const showMessage = (e) => {
    div.textContent = ' ';
 passwords.forEach((password, i) => {
 if(password === e.target.value) {
    div.textContent = messages[i];
    e.target.value = "";
 }
 })
}
input.addEventListener('input', showMessage);
