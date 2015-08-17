'use strict';

import React from 'react';

const {
  Component
} = React;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit() {
    let newComment = this.refs.commentBox.getDOMNode().value;

    this.props.addComment(newComment);

    this.refs.commentBox.getDOMNode().value = '';
  }

  render() {
    let comments = this.props.comments.map((comment, index) => {
      return (
        <li
          className='event-comment'
          key={index}>
          User{Math.ceil(Math.random()*1000)}: {comment}
        </li>
      )
    });

    return (
      <div>
        <div className='event-window-body'>
          <div className='comments-section-head'>Comments {comments.length}</div>
          <div className='comments-heading'>
            <input
              type='text'
              ref='commentBox'
              placeholder='Enter Comment' />
            <button
              className='button-comment-post'
              onClick={this.handleCommentSubmit} >
              Post
            </button>
          </div>
          <ul className='comments-list'>
            {comments}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments;
