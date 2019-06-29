import React from 'react';

import Comment from './Comment';

import './Comments.css';

class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        {this.props.comments.map(comment => {
          const { content, author, _id } = comment;
          return <Comment content={content} author={author} key={_id} />;
        })}
      </div>
    );
  }
}

export default Comments;
