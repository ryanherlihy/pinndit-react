'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Map from './Map';

const {
  Component
} = React;

class App extends Component {
  constructor() {
    super();
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
