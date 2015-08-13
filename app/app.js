'use strict';

import React from 'react';
import router from '../app/config/router.js';

router.run((Handler) => {
  React.render(
    <Handler />,
    document.body
  );
});
