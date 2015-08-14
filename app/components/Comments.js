'use strict';

import React from 'react';

const {
  Component
} = React;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.comments;
  }

  componentWillMount() {
    if (!this.props) {
      this.setState({comments: []});
    }
  }

  handleCommentSubmit(e) {
    e.preventDefault();

    this.setState(this.setState.comments.concat([e.target.value]));
  }

  render() {
    let styles = {
      win: {
        position: 'fixed',
        top: '25%',
        left: '25%',
        width: '50%',
        boxShadow: '0px 5px 5px grey',
        zIndex: 5
      }
    };

    let comments = this.state.comments.map((comment, index) => {
      return <li key={index}>{comment}</li>
    });

    return (
      <div className='panel panel-default' style={styles.win}>
        <div className='panel-heading'>
          <input type='text' ref='commentBox' />
        </div>
        <div className='panel-body'>
          <ul className='comments-list'>
            {comments}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments;
