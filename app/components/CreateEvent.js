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
    PinnActions.createNewEvent(newEventData);
    RouterActions.transitionTo('/');
  }

  render() {
    let content =
      <div className='container-fluid'>
        <div className='row'>
          <form>
            <div className='form-group'>
              <label forHTML='new-event-name'>Event Name</label>
              <input
                type='text'
                className='form-control'
                ref='newEventName'
                id='new-event-name'
                placeholder='Event Name' />
            </div>
            <div className='form-group'>
              <label forHTML='new-event-desc'>Event Description</label>
              <textarea
                className='form-control'
                ref='newEventDesc'
                id='new-event-desc'
                rows='5'
                placeholder='Event Description' >
              </textarea>
            </div>
            <button type='button' className='btn btn-danger' onClick={this.handleSubmit}>Create Event</button>
          </form>
        </div>
      </div>

    return (
      <div>
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
