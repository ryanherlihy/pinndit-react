'use strict';

import alt from '../alt';

class PinnActions {
  constructor() {
    
  }

  updateNewPinnCoords(coords) {
    this.dispatch(coords);
  }

  createNewEvent(eventData) {
    this.dispatch(eventData);
  }

  updateOpenPinn(coords) {
    this.dispatch(coords);
  }
}

export default alt.createActions(PinnActions);
