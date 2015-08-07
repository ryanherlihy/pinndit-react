'use strict';

import React from 'react';

import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class Overlay extends Component {

  toggleOverlay() {
    if (this.props.visible) {
      return 'block';
    } else {
      return 'none';
    }
  }

  handleCloseWindow() {
    PinnActions.closeWindow();
  }

  render() {
    let styles = {
      overlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: this.toggleOverlay()
      }
    }
    return (
      <div 
        style={styles.overlay}
        onClick={this.handleCloseWindow}></div>
    );
  }
}

export default Overlay;
