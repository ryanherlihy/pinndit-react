'use strict';

import alt from '../alt';

class PinnActions {
  constructor() {

  }

  newPinnDropped(marker) {
    this.dispatch(marker);
  }

  createNewEvent(eventData) {
    this.dispatch(eventData);
  }

  updateOpenPinn(marker) {
    this.dispatch(marker);
  }

  updateNewEventSubmitted() {
    this.dispatch();
  }

  closeWindow() {
    this.dispatch();
  }

}

export default alt.createActions(PinnActions);
