import React from 'react';
import { NavLink } from 'react-router-dom';

class Post extends React.Component {
  render() {
    return (
      <div>
        <a href="#">r/category</a>
        <span>
          Posted by {this.props.name} at {this.props.createdAt}
        </span>
        <NavLink to={`/feed/post/${this.props.id}`}>
          <h1>{this.props.title}</h1>
        </NavLink>
        <p>{this.props.content}</p>
        <p>{this.props.comments.length} Comments</p>
        <p>{this.props.votes} Votes</p>
      </div>
    );
  }
}

export default Post;
