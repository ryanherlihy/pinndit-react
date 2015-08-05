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
      onCloseWindow: PinnActions.CLOSE_WINDOW
    });
    this.pinns = [];
    this.newPinnCoords;
    this.newEventSubmitted = false;
    this.newEventModalOpen = false;
    this.eventModalOpen = false;
    this.overlayVisible = false;
    this.openPinn = {
      eventName: '',
      eventDesc: ''
    };
    this.maxId = 0;
  }

  onCreateNewEvent(eventData) {
    eventData.id = this.maxId + 1;
    this.pinns.push(eventData);
    this.overlayVisible = false;
    this.newEventModalOpen = false;
  }

  onNewPinnDropped(coords) {
    this.newPinnCoords = coords;
    this.overlayVisible = true;
    this.newEventModalOpen = true;
  }

  onUpdateNewPinnCoords(coords) {
    this.newPinnCoords = coords;
  }

  onUpdateOpenPinn(coords) {
    this.openPinn = this.pinns.filter((pinn) => {
      return (pinn.eventCoords === coords);
    })[0];
    this.overlayVisible = true;
    this.eventModalOpen = true;
  }

  onUpdateNewEventSubmitted() {
    this.newEventSubmitted = !this.newEventSubmitted;
  }

  onCloseWindow() {
    this.newEventModalOpen = false;
    this.eventModalOpen = false;
    this.overlayVisible = false;
  }
}

export default alt.createStore(PinnStore);
