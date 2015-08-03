'use strict';

import alt from '../alt';
import PinnActions from '../actions/PinnActions';

class PinnStore {
  constructor() {
    this.bindListeners({
      onCreateNewEvent: PinnActions.CREATE_NEW_EVENT,
      onUpdateNewPinnCoords: PinnActions.UPDATE_NEW_PINN_COORDS,
      onUpdateOpenPinn: PinnActions.UPDATE_OPEN_PINN,
      onUpdateNewEventSubmitted: PinnActions.UPDATE_NEW_EVENT_SUBMITTED
    });
    this.pinns = [];
    this.newPinnCoords;
    this.newEventSubmitted = false;
    this.openPinn = {
      eventName: '',
      eventDesc: ''
    };
    this.maxId = 0;
  }

  onCreateNewEvent(eventData) {
    eventData.id = this.maxId + 1;
    this.pinns.push(eventData);
    console.log(this.pinns);
  }

  onUpdateNewPinnCoords(coords) {
    this.newPinnCoords = coords;
  }

  onUpdateOpenPinn(coords) {
    this.openPinn = this.pinns.filter((pinn) => {
      return (pinn.eventCoords === coords);
    })[0];
  }

  onUpdateNewEventSubmitted() {
    this.newEventSubmitted = !this.newEventSubmitted;
    $('#create-event').modal('hide');
  }
}

export default alt.createStore(PinnStore);
