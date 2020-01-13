const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

// 3 spodób udemy
const div = document.querySelector('div');

const LowerPasswords = passwords.map( password => password.toLowerCase())

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for( let i=0; i < LowerPasswords.length; i++ ) {
        if( textInput === LowerPasswords[i]) {
        div.innerHTML = messages[i];
        }
    }
   }
   
   input.addEventListener("input", showMessage)
 

/*
// 2 sposób udemy
passwords.forEach((password, index ) => {
    passwords[index] = password.toLowerCase();
})

const showMessage = (e) => {
    const input = e.target.value.toLowerCase();
    passwords.forEach((index, i) => {
     if (index === input) {
      document.querySelector('div').textContent = messages[i];
     }
    })
   }
   input.addEventListener("input", showMessage) 


// moj "sposób"
const showMessage = (e) => {
    let text = e.target.value;

 passwords.forEach((password, index) => {
    let LowerText = text.toLowerCase();
  if (password.toLowerCase() === text) {
    const div = document.querySelector('.message'); //
    div.textContent = messages[index];
  }
 })
}

input.addEventListener("input", showMessage)



// 1 sposób udemy

const showMessage = (e) => {
 passwords.forEach((item, i) => {
  if (item.toLowerCase() === e.target.value.toLowerCase()) {
   document.querySelector('div').textContent = messages[i];
  }
 })
}

input.addEventListener("input", showMessage) 
*/
