$(document).ready(function()
    {
        // Wyszukuje w google podana wartość
    $("#myform").submit(function(e){
        var searchedValue = $("input[name='searchedValue']").attr("value");
        
        if(searchedValue)
            window.location.href = "http://www.google.pl/#hl=plf&output=search&q="+searchedValue;
        else
            alert("empty string");
        
        e.preventDefault();
    });
});
// Wyszukuje wartość na konkretnej stron (videokursy)
    //"http://www.google.pl/#hl=plf&output=search&q=site:videokurs.pl "+searchedValue;

    