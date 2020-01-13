// const timer = () => {
//     let second = 0;
//     function clock() {
//         second++;
//         document.body.textContent = `${second} sekund`
//     }
//     return clock
// }

// const showTime = timer();

// setInterval(showTime, 1000)

// const timer = () => {
//  let seconds = 0;

//  function ShowTime() {
//     seconds++;
//     document.body.textContent = `${seconds} sekund`;
//  }
//  return ShowTime
// }

// const start = timer();

// setInterval(start, 1000)
let sekundy = 0;

const add = () => {
    
    document.body.textContent = ` ${sekundy} sekund`
    sekundy++;
}
setInterval(add, 1000)