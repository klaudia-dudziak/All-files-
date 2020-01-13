// let number = 0;

// const add = () => {
//     number++;
//     document.body.textContent = `stan licznika to ${number}`;
// }

// document.addEventListener('click', add);

////////////////////////////////

// const add = () => {
//  let number = 0;
//  return () => {
//      number++;
//      document.body.textContent = `stan licznika to ${number}`;
//  }
// }


// const counter = add();
// const counterFrom5 = add(5);
// document.addEventListener('click', counter);

// const user = (name = '', age) => {
//     let userName = name;
//     let userAge = age;

//     function showName () {
//         console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupic piwo' : 'Nie mozesz kupic piwa'}`);
//     }
//     return showName
// }

// const mieszko = user("mieszko", 20); 
// const jagienka = user("jagienka", 17);
// mieszko();

let counter = 0; 

const add = () => {
    document.body.textContent = `Stan licznika to: ${counter}`;
    counter++

} 
window.addEventListener('click', add)