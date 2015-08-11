'use strict'

import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from '../components/App';
import CreateEvent from '../components/CreateEvent';
import Event from '../components/Event';

import PinnStore from '../stores/PinnStore';

const {
  Component
} = React;

class EventWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = PinnStore.getState();
  }

  render() {
    return (
      <Event
        name={this.state.openPinn.eventData.eventName}
        desc={this.state.openPinn.eventData.eventDesc} />
    );
  }
}

export default (
  <Route handler={App} >
    <Route name='create-event' handler={CreateEvent} />
    <Route name='event' handler={EventWrapper} />
  </Route>
);
