
const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna", "ania"];
const messages = ["wyjechałam </3 ", "piękna pora roku", "hello"];

input.addEventListener('input', (e) => {
    div.textContent = ' ';
    const text = e.target.value;

passwords.forEach((password, index) => {
 if(password === text) {
    div.textContent = messages[index];
    e.target.value = '';
 }  
})
})

input.addEventListener("focus", (e)  => {
    e.target.classList.add('active'); //toggle
})

input.addEventListener("blur", (e)  => {
    e.target.classList.remove('active'); //toggle

})

/*
console.log(e.target.value);
if(password === e.target.value) {
    div.textContent = message;
} 
    else {
    div.textContent = ' ';
    }
}) */
