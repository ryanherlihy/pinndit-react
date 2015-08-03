'use strict';

import React from 'react';
import PinnStore from '../stores/PinnStore';
import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let name = document.getElementById('new-event-name').value;
    let desc = document.getElementById('new-event-desc').value;
    document.getElementById('new-event-name').value = '';
    document.getElementById('new-event-desc').value = '';
    let newEventData = {
      eventCoords: this.props.coords,
      eventName: name.trim(),
      eventDesc: desc.trim()
    };
    PinnActions.createNewEvent(newEventData);
    PinnActions.updateNewEventSubmitted();
    // $('#create-event').modal('hide');
  }

  render() {
    return (
      <div className='modal fade' id='create-event'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header lead'>
              Create New Event
            </div>
            <div className='modal-body'>
              <div className='container-fluid'>
                <div className='row'>
                  <form>
                    <div className='form-group'>
                      <label forHTML='new-event-name'>Event Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='new-event-name'
                        placeholder='Event Name' />
                    </div>
                    <div className='form-group'>
                      <label forHTML='new-event-desc'>Event Description</label>
                      <textarea
                        className='form-control'
                        id='new-event-desc'
                        rows='5'
                        placeholder='Event Description' >
                      </textarea>
                    </div>
                    <button type='button' className='btn btn-danger' onClick={this.handleSubmit}>Create Event</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
