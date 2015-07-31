'use strict';

import React from 'react';
import PinnStore from '../stores/PinnStore';
import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class Event extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='modal fade' id='event'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header lead'>
              {this.props.name}
            </div>
            <div className='modal-body'>
              <div className='container-fluid'>
                <div className='row'>
                  <p className='lead'>Event Description</p>
                  <hr></hr>
                  {this.props.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
