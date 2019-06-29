import React from 'react';
import { NavLink } from 'react-router-dom';

import './Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div className="voting-sidebar">
          <p>{this.props.votes}</p>
        </div>
        <div className="post-content">
          <div className="post-header">
            <NavLink to={`/feed/posts/r/${this.props.category}`}>
              <a href="#" className="category">{`r/${this.props.category}`}</a>
            </NavLink>
            <p className="author">
              Posted by {this.props.author} at
              {new Date(this.props.createdAt).toLocaleDateString()}
            </p>
            <a href="#" className="join">
              + JOIN
            </a>
          </div>
          <NavLink to={`/feed/post/${this.props.id}`}>
            <h1>{this.props.title}</h1>
          </NavLink>
          <p>{this.props.content}</p>
          <div className="post-options">
            <i class="fas fa-comment" />
            <p>
              {!this.props.comments
                ? 0
                : this.props.comments.length === 1
                ? `${this.props.comments.length} Comment`
                : `${this.props.comments.length} Comments`}
            </p>
            <i class="fas fa-share" />
            <p>Share</p>
            <i class="fas fa-ellipsis-h" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
