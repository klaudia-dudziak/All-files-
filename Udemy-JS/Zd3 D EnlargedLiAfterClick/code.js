const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li"); //x

let size = 10;

const showLi = function () {
    // liItems.style.display = "block"; // nie da sie zrobic na tablicy :(
    for (let i = 0; i < liItems.length; i++) /* x */ {
        if(liItems[i].style.display === "") {
        liItems[i].style.display = "block";
        }
        liItems[i].style.fontSize = size + "px";
    }
    size++ ;
}
btn.addEventListener("click", showLi);
