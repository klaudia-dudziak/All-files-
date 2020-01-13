const endTime = new Date('2020-01-25 22:34:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
    const nowTime = new Date().getTime();
    //const time = Math.floor((endTime - nowTime) / 1000);
    const time = endTime - nowTime;
    const seconds = Math.floor((endTime / 1000) - (nowTime / 1000))%60;
    const minutes = Math.floor((endTime / (1000 *60)) - (nowTime / (1000 *60))%60);
    const hours = Math.floor((endTime / (1000 *60*60)) - (nowTime / (1000 *60*60))%24);
    const days = Math.floor((endTime / (1000 *60*60*24)) - (nowTime / (1000 *60*60*24)));
    
    hours = hours < 10 ? "0" + hours : hours;

    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;
    spanS.textContent = seconds;
}, 1000) 


















