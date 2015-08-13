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

    this.handleCloseWindow = this.handleCloseWindow.bind(this);
  }

  handleCloseWindow() {
    // this.context.router.transitionTo('/');
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

Overlay.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Overlay;
