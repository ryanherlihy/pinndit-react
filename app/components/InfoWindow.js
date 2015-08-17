'use strict';

import React from 'react';

import Comments from './Comments';

const {
  Component
} = React;

class InfoWindow extends Component {

  render() {
    return (
      <div className='event-window'>
        <div className='event-window-heading'>{this.props.heading}</div>
        <div className='event-window-body'>
          {this.props.content}
        </div>
        <div className='event-window-comments'>
          {this.props.comments}
        </div>
      </div>
    );
  }
}

export default InfoWindow;
