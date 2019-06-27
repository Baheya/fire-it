import React from 'react';

import Comment from './Comment';

class Comments extends React.Component {
  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          const { content, author } = comment;
          return <Comment content={content} author={author} />;
        })}
      </div>
    );
  }
}

export default Comments;
