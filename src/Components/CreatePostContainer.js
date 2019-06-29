import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

import './CreatePostContainer.css';
import banner from '../assets/banner.jpg';

class CreatePostContainer extends React.Component {
  render() {
    return (
      <div className="create-post-container">
        <img src={banner} alt="Create Post banner" />
        <p>
          The best posts on Reddit for you, pulled from the most active
          communities on Reddit. Check here to see the most shared, upvoted, and
          commented content on the internet.
        </p>
        <a href="/feed/create-post" className="create-post-container-button">
          CREATE POST
        </a>
      </div>
    );
  }
}

export default CreatePostContainer;
