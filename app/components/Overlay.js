'use strict';

import React from 'react';
import Router from 'react-router';

import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.handleCloseWindow = this.handleCloseWindow.bind(this);
  }

  toggleOverlay() {
    if (this.props.visible) {
      return 'block';
    } else {
      return 'none';
    }
  }

  handleCloseWindow() {
    this.context.router.goBack();
  }

  render() {
    return (
      <div
        className='overlay'
        onClick={this.handleCloseWindow}></div>
    );
  }
}

Overlay.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Overlay;
