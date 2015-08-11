'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Map from './Map';
import CreateEvent from './CreateEvent';
import Event from './Event';
import TestWindow from './TestWindow';
import Overlay from './Overlay';

import PinnStore from '../stores/PinnStore';

const {
  Component
} = React;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = PinnStore.getState();
  }

  componentDidMount() {
    PinnStore.listen((pinnData) => {
      this.setState(pinnData);
    });
  }

  componentWillUnount() {
    PinnStore.unlisten((pinnData) => {
      this.setState(pinnData);
    });
  }

  render() {
    // return (
    //   <div id='app'>
    //     <Map />
    //     <Overlay
    //       visible={this.state.overlayVisible} />
    //     <CreateEvent
    //       coords={this.state.newPinnCoords}
    //       open={this.state.newEventModalOpen} />
    //     <Event
    //       name={this.state.openPinn.eventData.eventName}
    //       desc={this.state.openPinn.eventData.eventDesc}
    //       open={this.state.eventModalOpen} />
    //   </div>
    // );
    return (
      <div id='app'>
        <Map />
        <RouteHandler />
      </div>
    );
  }
}

export default App;
