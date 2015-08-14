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
        <header>
          <img src='../../app/images/pinnditLogo.png' />
        </header>
        <Map />
        <RouteHandler />
        <footer align='center'>
          Pinnd.It &copy; Copyright 2015
        </footer>
      </div>
    );
  }
}

export default App;
