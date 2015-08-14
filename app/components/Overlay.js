'use strict';

import React from 'react';

import PinnActions from '../actions/PinnActions';

import RouterActions from '../actions/RouterActions';

const {
  Component
} = React;

class Overlay extends Component {
  constructor(props) {
    super(props);

  }

  handleCloseWindow() {
    RouterActions.transitionTo('/');
  }

  render() {
    return (
      <div
        className='overlay'
        onClick={this.handleCloseWindow}></div>
    );
  }
}

export default Overlay;
