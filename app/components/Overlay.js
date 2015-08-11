'use strict';

import React from 'react';

import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.handleCloseWindow = this.handleCloseWindow.bind(this);
  }

  handleCloseWindow() {
    if (this.props.windowType === 'create-event') {
      PinnActions.closeWindow();
    }
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
