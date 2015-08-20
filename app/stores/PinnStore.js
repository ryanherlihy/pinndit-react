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
      onAddComment: PinnActions.ADD_COMMENT,
      onCheckPinnTimeout: PinnActions.CHECK_PINN_TIMEOUT
    });

    this.pinns = [];
    this.newPinn;
    this.openPinn = {
      eventData: {
        eventName: '',
        eventDesc: '',
        eventComments: [],
      }
    };
  }

  onNewPinnDropped(marker) {
    this.newPinn = marker;
  }

  onCreateNewEvent(eventData) {
    this.newPinn.eventData = eventData;
    this.newPinn.eventData.eventComments = [];
    this.newPinn.eventData.dropTime = Date.now();
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

  onCheckPinnTimeout() {
    if (this.openPinn) {
      let pinnAge = Date.now() - this.openPinn.eventData.dropTime;
      console.log(pinnAge, this.pinns);
      if (pinnAge > 4000) {
        this.pinns = this.pinns.filter((pinn) => {
          return pinn.getPosition() !== this.openPinn.getPosition();
        });
        this.openPinn.setMap(null);
        this.openPinn = null;
      }
    }
  }
}

export default alt.createStore(PinnStore);
