const wykrzyknik = document.getElementById('wykrzyknik');

window.onload = function(){
    wykrzyknik.onmousedown = function() {
        document.onmousemove = function(e){
            wykrzyknik.style.left = e.clientX - wykrzyknik.width/2 + 'px';
            wykrzyknik.style.top = e.clientY - wykrzyknik.width/2 + 'px';
        }
    }
    document.onmouseup = function() {
        document.onmousemove = null;
    }
    document.ondragstart = function(e) {
        e.preventDefault();
    }
}

