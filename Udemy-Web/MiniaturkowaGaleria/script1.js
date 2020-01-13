const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementsByClassName("thumbnail");

window.onload = function()
{
    var image = new Image();
    mainImage.appendChild(image);// dodaje duze zdj
    var currentThumbnail = thumbnails[0];
    image.src = currentThumbnail.getAttribute("src");// daje dostęp do wyswietlenia duzego zdj z aktywnej miniaturki
    currentThumbnail.className += " current";// na starcie podkresla pierwsza miniaturke
    
    for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onmouseover = function()
    {
        currentThumbnail.className = currentThumbnail.className.replace("current", ""); //usuws podkreslinki zeby nie zostały na kazdej najechanej miniaturce
        currentThumbnail = this;// sprawia ze podkreslona jest tylko jedna miniaturka
        currentThumbnail.className += " current";// po zjechaniu z miniaturki zostawia podkreslenie
        
        image.src = this.getAttribute("src");//daje dostęp miniaturka do wywołania duzego zdj
    }
  }
}
