 
 
 // defines starter location of marker + zoom
 const map = L.map('MapLocation').setView([57.78145, 14.15618], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoidGh1c2U5MSIsImEiOiJja2h4cWt6cGQwbTh0MnJtcDJnemR0NDZlIn0.KIquddLTWuW8MstGYS9ATQ'
}).addTo(map);

  map.attributionControl.setPrefix(false);
 // defines starter location of marker + zoom
  var marker = new L.marker([57.78145, 14.15618], {
    draggable: 'true'
  });

  marker.on('dragend', function(event) {
    var position = marker.getLatLng();
    marker.setLatLng(position, {
      draggable: 'true'
    }).bindPopup(position).update();
    $("#Latitude").val(position.lat);
    $("#Longitude").val(position.lng).keyup();
  });

  $("#Latitude, #Longitude").change(function() {
    var position = [parseInt($("#Latitude").val()), parseInt($("#Longitude").val())];
    marker.setLatLng(position, {
      draggable: 'true'
    }).bindPopup(position).update();
    map.panTo(position);
  });
  map.addLayer(marker);


// function to save coords.
  function Spara() {
  console.log(marker._latlng);
}

