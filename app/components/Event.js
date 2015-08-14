'use strict';

import React from 'react';
import InfoWindow from './InfoWindow';
import Overlay from './Overlay';
import Comments from './Comments';

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
          <div className='section-head'>Event Description</div>
          <p>{this.state.eventData.eventDesc}</p>
        </div>
      </div>;

    return (
      <div>
        <Overlay
          windowType='event' />
        <InfoWindow
          comments={<Comments comments={{comments: []}} />}
          content={content}
          heading={this.state.eventData.eventName} />
      </div>
    );
  }
}

export default Event;
