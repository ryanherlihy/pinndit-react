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
      header: {
        height: '10%',
        backgroundColor: '#565050'
      },
      canvas: {
        height: '100%',
        width: '100%'
      },
      map: {
        height: '85%',
        width: '100%'
      },
      footer: {
        height: '5%',
        backgroundColor: '#E84C3D'
      }
    }
    return (
      <div style={style.canvas}>
        <header style={style.header}>
          <img src={'../images/pinnditLogo.png'} />
        </header>
        <Map style={style.map}/>
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
