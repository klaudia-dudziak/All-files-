const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy teskt',
}, 
{
    img: "images/img2.jpg",
    text: 'Drugi teskt',
}, 
{
    img: "images/img3.jpg",
    text: 'Trzeci teskt',
} ];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

//interfejs
const time = 1500;
let active = 0;

//implementacja
 
const changeDot = () => {
   const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
   dots[activeDot].classList.remove('active');
   dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
   changeDot();
   
}
let indexInterval = setInterval(changeSlide, time);

//klawiisze
const keyChange = (e) => {
    if(e.keyCode == 37 || e.keyCode == 39 ) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
    if(active === slideList.length ) {
      active = 0;  
    } else if (active < 0) {
        active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time)
    }
}

window.addEventListener("keydown", keyChange);
