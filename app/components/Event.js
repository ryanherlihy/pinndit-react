'use strict';

import React from 'react';
import InfoWindow from './InfoWindow';
import Overlay from './Overlay';

import PinnStore from '../stores/PinnStore';
import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.pinn;
  }

  render() {
    let content =
      <div className='container-fluid'>
        <div className='row'>
          <p className='lead'>Event Description</p>
          <hr></hr>
          {this.state.eventData.eventDesc}
        </div>
      </div>;
    return (
      <div>
        <Overlay
          windowType='event' />
        <InfoWindow
          content={content}
          heading={this.state.eventData.eventName} />
      </div>
    );
  }
}

export default Event;
