'use strict';

import alt from '../alt';
import RouterActions from '../actions/RouterActions';

import PinnStore from './PinnStore';

class RouteStore {
  constructor() {
    this.bindListeners({
      onTransitionTo: RouterActions.TRANSITION_TO,
      onGoBack: RouterActions.GO_BACK
    });
  }

  onTransitionTo() {
    this.waitFor(PinnStore);
  }

  onGoBack() {
    this.waitFor(PinnStore);
  }
}

export default alt.createStore(RouteStore);
