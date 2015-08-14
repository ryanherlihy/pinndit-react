'use strict';

import alt from '../alt';

import React from 'react';

import router from '../config/router';

class RouterActions {
  constructor() {}

  transitionTo(route) {
    this.dispatch(route);
    router.transitionTo(route);
  }

  run() {
    router.run((Handler) => {
      React.render(
        <Handler />,
        document.body
      );
    });
  }

}

export default alt.createActions(RouterActions);
