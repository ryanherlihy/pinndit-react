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
  }

  render() {
    let content =
      <div className='container-fluid'>
        <div className='row'>
          <p className='lead'>Event Description</p>
          <hr></hr>
          {this.props.desc}
        </div>
      </div>;
    return (
      <div>
        <Overlay
          windowType='event' />
        <InfoWindow
          open={this.props.open}
          content={content}
          heading={this.props.name} />
      </div>
    );
  }
}

export default Event;
