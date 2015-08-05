'use strict';

import alt from '../alt';

class PinnActions {
  constructor() {

  }

  newPinnDropped(coords) {
    this.dispatch(coords);
  }

  createNewEvent(eventData) {
    this.dispatch(eventData);
  }

  updateOpenPinn(coords) {
    this.dispatch(coords);
  }

  updateNewEventSubmitted() {
    this.dispatch();
  }

  closeWindow() {
    this.dispatch();
  }

}

export default alt.createActions(PinnActions);
