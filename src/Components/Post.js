import React from 'react';

const Post = props => {
  return (
    <div>
      <a href="#">r/category</a>
      <span>
        Posted by {props.name} at {props.createdAt}
      </span>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span>2 Comments</span>
      <span>4 Votes</span>
    </div>
  );
};

export default Post;
