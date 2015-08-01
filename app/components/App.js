'use strict';

import React from 'react';
import Map from './Map';
import CreateEvent from './CreateEvent';
import Event from './Event';
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
    let style = {
      canvas: {
        height: '85%',
        width: '100%'
      },
    }
    return (
      <div style={style.canvas}>
        <header>
          <h1>Map</h1>
          <img />
        </header>
        <Map />
        <CreateEvent
          coords={this.state.newPinnCoords} />
        <Event
          name={this.state.openPinn.eventName}
          desc={this.state.openPinn.eventDesc} />
        <footer className='lead' style={style.footer}>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
