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
      <div className='panel panel-default' style={styles.win}>
        <div className='panel-heading lead'>{this.props.heading}</div>
        <div className='panel-body'>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default InfoWindow;
