import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div>
        <p>Posted by {this.props.author.name}</p>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Comment;
