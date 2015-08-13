'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Map from './Map';

import PinnStore from '../stores/PinnStore';

const {
  Component
} = React;

class App extends Component {
  constructor() {
    super();

    this.state = PinnStore.getState();
  }

  render() {
    return (
      <div id='app'>
        <Map />
        <RouteHandler />
      </div>
    );
  }
}

export default App;
