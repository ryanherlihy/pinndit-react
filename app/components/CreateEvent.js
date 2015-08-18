'use strict';

import React from 'react';
import InfoWindow from './InfoWindow';
import Overlay from './Overlay';

import PinnStore from '../stores/PinnStore';
import PinnActions from '../actions/PinnActions';

import RouterActions from '../actions/RouterActions';

const {
  Component
} = React;

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static willTransitionFrom(transition, component) {
    PinnActions.closeCreateEventWindow();
  }

  componentDidMount() {
    document.getElementById('new-event-name').value = '';
    document.getElementById('new-event-desc').value = '';
  }

  handleSubmit() {
    let newEventData = {
      eventName: document.getElementById('new-event-name').value.trim(),
      eventDesc: document.getElementById('new-event-desc').value.trim()
    };

    if (document.getElementById('new-event-name').value) {
      PinnActions.createNewEvent(newEventData);
      RouterActions.goBack();
    }
  }

  render() {
    let content =
      <form>
        <input
          type='text'
          ref='newEventName'
          id='new-event-name'
          placeholder='Event Name' />
        <textarea
          ref='newEventDesc'
          id='new-event-desc'
          rows='5'
          placeholder='Event Description' >
        </textarea>
        <button type='button' className='btn btn-danger' onClick={this.handleSubmit}>Create Event</button>
      </form>

    return (
      <div className='window-overlay'>
        <Overlay
          windowType='create-event' />
        <InfoWindow
          open={this.props.open}
          content={content}
          heading='Create Event' />
      </div>
    );
  }
}

export default CreateEvent;
