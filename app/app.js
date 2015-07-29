'use strict';

function initialize() {
  var myLatlng = new google.maps.LatLng(42.154, -71.223);
  var mapOptions = {
    center: { lat: 42.154, lng: -71.223},
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  google.maps.event.addListener(map, 'click', function(e) {
    addMarker(e.latLng);
  })

  function addMarker(coords) {

    let marker = new google.maps.Marker({
      position: coords,
      map: map,
      title: 'New Marker'
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
