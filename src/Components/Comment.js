import React from 'react';

import './Comment.css';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p>
          Posted by <span>{this.props.author}</span>
        </p>
        <p>{this.props.content}</p>
        <div className="comment-options">
          <a href="#">Share</a>
          <a href="#">Report</a>
          <a href="#">Save</a>
        </div>
      </div>
    );
  }
}

export default Comment;
