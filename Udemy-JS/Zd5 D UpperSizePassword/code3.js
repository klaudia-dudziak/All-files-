const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];

const show = () => {
    for( i = 0; i <= messages.length; i++){
        let lowerPassword = passwords.map(password => password.toLowerCase());
        if(lowerPassword[i] === input.value.toLowerCase()){
            div.textContent = messages[i];
        } 
    }
}
input.addEventListener('input', show)