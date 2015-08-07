'use strict';

import React from 'react';
import CreateEvent from './CreateEvent';
import PinnStore from '../stores/PinnStore';
import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = PinnStore.getState();
    this.map;

    this.initialize = this.initialize.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.deleteMarker = this.deleteMarker.bind(this);
    this.centerMapView = this.centerMapView.bind(this);
  }

  componentDidMount() {
    PinnStore.listen((pinnData) => {
      this.setState(pinnData);
    });
    this.initialize();
  }

  componentWillUnmount() {
    PinnStore.unlisten((pinnData) => {
      this.setState(pinnData);
    });
  }

  initialize() {
    var myLatlng = new google.maps.LatLng(42.154, -71.223);
    var mapOptions = {
      center: { lat: 42.154, lng: -71.223},
      zoom: 15
    };

    this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    google.maps.event.addListener(this.map, 'click', (e) => {
      this.addMarker(e.latLng);
    })
  }

  addMarker(coords) {
    let marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      title: 'New Marker',
    });

    this.centerMapView(coords);
    PinnActions.newPinnDropped(marker);

    // PinnStore.listen((pinnData) => {
    //   if (!pinnData.newEventSubmitted && !pinnData.newEventModalOpen) {
    //     this.deleteMarker(marker);
    //     PinnStore.unlisten(() => {
    //       console.log('unlistened');
    //     });
    //   } else {
    //     PinnActions.updateNewEventSubmitted();
    //   }
    // });

    google.maps.event.addListener(marker, 'click', () => {
      this.centerMapView(coords);
      PinnActions.updateOpenPinn(marker);
    })

  }

  deleteMarker(marker) {
    marker.setMap(null);
    marker = null;
  }

  centerMapView(center) {
    this.map.panTo(center);
    this.map.setZoom(15);
  }

  render() {
    console.log(this.state);
    return (
      <div id='map-canvas' style={this.props.style}>
      </div>
    )
  }
}

export default Map;
