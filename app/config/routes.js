'use strict'

import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from '../components/App';
import CreateEvent from '../components/CreateEvent';
import Event from '../components/Event';

const {
  Component
} = React;

export default (
  <Route handler={App} >
    <Route name='create-event' handler={CreateEvent} />
    <Route name='event' path='event/:id' handler={Event} />
  </Route>
);
