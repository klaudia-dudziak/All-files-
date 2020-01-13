// Initialize and add the map
window.initMap = function() {
    // The location of xx
    var nyc = {lat: 40.714861, lng: -74.048529};
    // The map, centered at xx
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: nyc});
    // The marker, positioned at xx
    var marker = new google.maps.Marker({position: nyc, map: map});
  }

