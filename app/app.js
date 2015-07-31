'use strict';

import React from 'react';
// import Router from 'react-router';
// import routes from './routes';
// import InfoWindow from './components/InfoWindow';
// import CreateEvent from './components/CreateEvent';
// import Pinn from './components/Pinn';
// import PinnStore from './stores/PinnStore';
//
// let mapState = PinnStore.getState();
//
// function initialize() {
//   var myLatlng = new google.maps.LatLng(42.154, -71.223);
//   var mapOptions = {
//     center: { lat: 42.154, lng: -71.223},
//     zoom: 15
//   };
//
//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//   google.maps.event.addListener(map, 'click', function(e) {
//     addMarker(map, e.latLng);
//   })
// }
//
// function addMarker(map, coords) {
//   let marker = new google.maps.Marker({
//     position: coords,
//     map: map,
//     title: 'New Marker',
//   });
//
//   PinnStore.listen((pinnData) => {
//     mapState = pinnData;
//     marker.eventData = pinnData.pinns[pinnData.pinns.length - 1];
//     PinnStore.unlisten();
//   });
//
//   centerMapView(map, coords);
//   React.render(<CreateEvent coords={marker.getPosition()}/>, document.getElementById('info-window'));
//
//   google.maps.event.addListener(marker, 'click', function() {
//     console.log(marker.eventData);
//   })
// }
//
// function centerMapView(map, center) {
//   map.panTo(center);
//   map.setZoom(15);
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);
//
// let node = document.getElementById('info-window');
//
// Router.run(routes, (Handler) => {
//   React.render(<Handler/>, node);
// });

import App from './components/App';

React.render(
  <App />,
  document.getElementById('app')
);
