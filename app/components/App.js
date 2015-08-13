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
    // this.onChange = this.onChange.bind(this);
  }
  //
  // componentDidMount() {
  //   RouteStore.listen(this.onChange);
  // }
  //
  // componentWillUnount() {
  //   RouteStore.unlisten(this.onChange);
  // }
  //
  // onChange(route) {
  //   this.context.router.transitionTo(route);
  // }

  render() {
    return (
      <div id='app'>
        <Map />
        <RouteHandler />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.func.isRequired
// };

export default App;
