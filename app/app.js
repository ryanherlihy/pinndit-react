'use strict';

import React from 'react';
import Router from 'react-router';
import routes from '../app/config/routes.js';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(
    <Handler />,
    document.body
  );
});
