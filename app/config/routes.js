'use strict'

import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from '../components/App';
import CreateEvent from '../components/CreateEvent';
import Event from '../components/Event';

export default (
  <Route handler={App} >
    <Route name='createEvent' handler={CreateEvent} />
    <Route name='event' handler={Event} />
  </Route>
);
