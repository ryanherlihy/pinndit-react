'use strict';

import React from 'react';
import TestWindow from './TestWindow';
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

  componentWillReceiveProps(props) {
    console.log(props);
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
        <TestWindow
          open={this.props.open}
          content={content}
          heading={this.props.name} />
      </div>
    );
  }
}

export default Event;
