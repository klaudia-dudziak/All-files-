/*
    onmouseover - gdy kursor myszy najedzie na element
    onmouseout - gdy kursor myszy opuście elemen
    onmousemove - gdy kursor myszy "jeździ" po elemencie.
    onclick = gdy element zostanie kliknięty
    ondblclick = gdy element zostanie 2x szybko kliknięty
    
    onclick to tak  naprawdę:

    onmousedown - gdy mamy wciśnięty przycisk myszy
    onmouseup - gdy opuścimy przycisk myszy
 */
function movingImage(e, wykrzyknik)
{
    wykrzyknik.style.left = e.clientX - wykrzyknik.width / 2 + "px";
    wykrzyknik.style.top = e.clientY - wykrzyknik.height / 2 + "px";
}

window.onload = function()
{
    var wykrzyknik = document.getElementById("wykrzyknik");
    
    wykrzyknik.onmousedown = function()
    {
        var self = this;
        document.onmousemove = function(e)
        {
            movingImage(e, self);
        };  
    };
    
    wykrzyknik.onmouseup = function()
    {
        document.onmousemove = null;
    };
    
    wykrzyknik.ondragstart = function(e)
    {
       e.preventDefault();  
    };
};

// const wykrzyknik = document.getElementById('wykrzyknik');

// window.onload = function() {
//     wykrzyknik.onmousedown = function(){
//         document.onmousemove = function(e){
//             wykrzyknik.style.left = e.clientX - wykrzyknik.width / 2 + "px";
//             wykrzyknik.style.top = e.clientY - wykrzyknik.width / 2 + "px";
//         }
//     }
//     document.onmouseup = function(){
//         document.onmousemove = null
//     }

//     wykrzyknik.ondragstart = function(e) {
//         e.preventDefault();
//     }
// }




