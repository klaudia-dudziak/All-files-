
let grow = true;
let size = 110;

const div = document.createElement('div')
document.body.appendChild(div);


div.style.height = size + "px";
div.style.backgroundColor = "green";
div.style.position = "fixed";
div.style.top = 0;
div.style.left = 0;
div.style.width = "100%";
document.body.style.height = "10000px";


 const changeHeight = function () {

    if(size > window.innerHeight / 2) {
        grow = !grow; // grow = false
        
    }
    else if ( size <= 0) {
        grow = !grow; // grow = true
    }

    if (grow) {
        size += 5;
        div.style.height = size + "px";
        div.style.backgroundColor = "green";
    }
    else if(!grow) {
        size -= 5;
        div.style.height = size + "px";
        div.style.backgroundColor = "red";
    }
}
window.addEventListener("scroll", changeHeight)

