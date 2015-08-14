'use strict';

import React from 'react';

const {
  Component
} = React;

class InfoWindow extends Component {

  render() {
    let styles = {
      win: {
        position: 'fixed',
        top: '25%',
        left: '25%',
        width: '50%',
        boxShadow: '0px 5px 5px grey',
        zIndex: 5
      }
    };
    return (
      <div className='event-window' style={styles.win}>
        <div className='event-window-heading lead'>{this.props.heading}</div>
        <div className='event-window-body'>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default InfoWindow;
