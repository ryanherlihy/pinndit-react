'use strict';

import alt from '../alt';
import RouterActions from '../actions/RouterActions';

import PinnStore from './PinnStore';

class RouteStore {
  constructor() {
    this.bindListeners({
      onTransitionTo: RouterActions.TRANSITION_TO
    });

    this.currentRoute = '/';
  }

  onTransitionTo() {
    this.waitFor(PinnStore);
  }

}

export default alt.createStore(RouteStore);
