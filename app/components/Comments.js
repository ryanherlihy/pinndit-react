'use strict';

import React from 'react';

const {
  Component
} = React;

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.comments;
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props) {
      this.setState({comments: []});
    }
  }

  handleCommentSubmit() {
    let newComment = this.refs.commentBox.getDOMNode().value;

    this.setState({
      comments: this.state.comments.concat([newComment])
    })
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
      return (
        <li
          className='event-comment'
          key={index}>
          User{Math.ceil(Math.random()*1000)}: {comment}
        </li>
      )
    });
    console.log(comments, this.state.comments);
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
              onClick={this.handleCommentSubmit}
              >Post</button>
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
