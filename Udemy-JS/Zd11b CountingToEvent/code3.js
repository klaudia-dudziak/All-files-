const endTime = new Date('2020-01-25 22:34:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');
 
const time = () => {
 const nowTime = new Date();

 const days = Math.floor((endTime / (60*60*24*1000) ) - ( nowTime / (60*60*24*1000)));
 const hours = Math.floor(((endTime / (60*24*1000) ) - ( nowTime / (60*60*1000)))%24);
 const minutes = Math.floor(((endTime / (24*1000) ) - ( nowTime / (60*1000)))%60);
 const seconds = Math.floor(((endTime / 1000) - ( nowTime / 1000))%60);

 spanD.textContent = `${days}`
 spanH.textContent = `${hours}`
 spanM.textContent = `${minutes}`
 spanS.textContent = `${seconds}`
}

setInterval(time, 1000);