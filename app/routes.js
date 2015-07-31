'use strict'

import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import CreateEvent from './components/CreateEvent';
import InfoWindow from './components/InfoWindow';

export default (
  <Route name='empty' path='/' handler={InfoWindow}>
    <Route name="new" path='new' handler={CreateEvent}/>
    <DefaultRoute handler={InfoWindow} />
  </Route>
);
