'use strict';

import React from 'react';
import CreateEvent from './CreateEvent';
import PinnStore from '../stores/PinnStore';
import PinnActions from '../actions/PinnActions';

import RouterActions from '../actions/RouterActions';

const {
  Component
} = React;

class Map extends Component {
  constructor() {
    super();

    this.state = PinnStore.getState();
    this.map;

    this.onChange = this.onChange.bind(this);

    this.initialize = this.initialize.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.centerMapView = this.centerMapView.bind(this);
  }

  componentDidMount() {
    console.log('map mount');
    PinnStore.listen(this.onChange);
    this.initialize();
  }

  componentWillUnmount() {
    PinnStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  initialize() {
    var mapOptions = {
      center: { lat: 42.154, lng: -71.223},
      zoom: 15,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    let pinnControl = document.createElement('div');
    let pinnImage = document.createElement('img');
    pinnImage.src = '../../app/images/pinn.png';
    pinnImage.className = 'pinn-control';
    pinnImage.draggable = false;
    pinnControl.appendChild(pinnImage);
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(pinnControl);

    google.maps.event.addListener(this.map, 'click', (e) => {
      this.addMarker(e.latLng);
    })
  }

  addMarker(coords) {
    let marker = new google.maps.Marker({
      position: coords,
      map: this.map,
    });

    this.centerMapView(coords);
    PinnActions.newPinnDropped(marker);
    RouterActions.transitionTo('create-event');

    google.maps.event.addListener(marker, 'click', () => {
      this.centerMapView(coords);
      PinnActions.updateOpenPinn(marker);
      RouterActions.transitionTo('event', {id: this.state.openPinn.getPosition()});
    })
  }

  centerMapView(center) {
    this.map.panTo(center);
    this.map.setZoom(15);
  }

  render() {
    return (
      <div
        id='map-canvas' >
      </div>
    )
  }
}

export default Map;
