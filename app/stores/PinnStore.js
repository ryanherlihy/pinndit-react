'use strict';

import alt from '../alt';
import PinnActions from '../actions/PinnActions';

class PinnStore {
  constructor() {
    this.bindListeners({
      onCreateNewEvent: PinnActions.CREATE_NEW_EVENT,
      onUpdateOpenPinn: PinnActions.UPDATE_OPEN_PINN,
      onUpdateNewEventSubmitted: PinnActions.UPDATE_NEW_EVENT_SUBMITTED,
      onNewPinnDropped: PinnActions.NEW_PINN_DROPPED,
      onCloseWindow: PinnActions.CLOSE_WINDOW,
    });
    this.pinns = [];
    this.newPinnCoords;
    this.newPinn;
    this.newEventSubmitted = false;
    this.newEventModalOpen = false;
    this.eventModalOpen = false;
    this.overlayVisible = false;
    this.openPinn = {
      eventData: {
        eventName: '',
        eventDesc: ''
      }
    };
  }

  onCreateNewEvent(eventData) {
    this.newPinn.eventData = eventData;
    this.pinns.push(this.newPinn);
    this.newPinn = null;
    this.overlayVisible = false;
    this.newEventModalOpen = false;
    this.onUpdateNewEventSubmitted();
  }

  onNewPinnDropped(marker) {
    this.newPinnCoords = marker.getPosition();
    this.newPinn = marker;
    this.overlayVisible = true;
    this.newEventModalOpen = true;
  }

  onUpdateNewPinnCoords(coords) {
    this.newPinnCoords = coords;
  }

  onUpdateOpenPinn(marker) {
    this.openPinn = marker;
    this.overlayVisible = true;
    this.eventModalOpen = true;
  }

  onUpdateNewEventSubmitted() {
    this.newEventSubmitted = !this.newEventSubmitted;
  }

  onCloseWindow() {
    if (this.newEventModalOpen && !this.newEventSubmitted) {
      this.newPinn.setMap(null);
      this.newPinn = null;
    }
    this.newEventModalOpen = false;
    this.eventModalOpen = false;
    this.overlayVisible = false;
  }
}

export default alt.createStore(PinnStore);
