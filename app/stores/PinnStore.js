'use strict';

import alt from '../alt';
import PinnActions from '../actions/PinnActions';

class PinnStore {
  constructor() {
    this.bindListeners({
      onCreateNewEvent: PinnActions.CREATE_NEW_EVENT,
      onUpdateOpenPinn: PinnActions.UPDATE_OPEN_PINN,
      onNewPinnDropped: PinnActions.NEW_PINN_DROPPED,
      onCloseCreateEventWindow: PinnActions.CLOSE_CREATE_EVENT_WINDOW,
      onAddComment: PinnActions.ADD_COMMENT
    });

    this.pinns = [];
    this.newPinn;
    this.openPinn = {
      eventData: {
        eventName: '',
        eventDesc: '',
        eventComments: []
      }
    };
  }

  onNewPinnDropped(marker) {
    this.newPinn = marker;
  }

  onCreateNewEvent(eventData) {
    this.newPinn.eventData = eventData;
    this.newPinn.eventData.eventComments = [];
    this.pinns.push(this.newPinn);
    this.newPinn = null;
  }

  onUpdateOpenPinn(marker) {
    this.openPinn = marker;
  }

  onCloseCreateEventWindow() {
    if (this.newPinn) {
      this.newPinn.setMap(null);
      this.newPinn = null;
    }
  }

  onAddComment(comment) {
    this.openPinn.eventData.eventComments = [comment].concat(this.openPinn.eventData.eventComments);
  }
}

export default alt.createStore(PinnStore);
