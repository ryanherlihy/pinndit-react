'use strict';

import React from 'react';
import InfoWindow from './InfoWindow';
import Overlay from './Overlay';
import Comments from './Comments';

import PinnStore from '../stores/PinnStore';
import PinnActions from '../actions/PinnActions';

const {
  Component
} = React;

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = PinnStore.getState().openPinn;
    this.onChange = this.onChange.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  componentDidMount() {
    PinnStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PinnStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleAddComment(comment) {
    PinnActions.addComment(comment);
  }

  render() {
    let content =
      <div className='container-fluid'>
        <div className='row'>
          <div className='section-head'>Event Description</div>
          <p>{this.state.eventData.eventDesc ? this.state.eventData.eventDesc : 'No Description'}</p>
        </div>
      </div>;

    return (
      <div>
        <Overlay
          windowType='event' />
        <InfoWindow
          comments={
            <Comments
              comments={this.state.eventData.eventComments}
              addComment={this.handleAddComment} />
          }
          content={content}
          heading={this.state.eventData.eventName} />
      </div>
    );
  }
}

export default Event;
