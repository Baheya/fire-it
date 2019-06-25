import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

class CreatePostContainer extends React.Component {
  render() {
    return (
      <div>
        <p>
          The best posts on Reddit for you, pulled from the most active
          communities on Reddit. Check here to see the most shared, upvoted, and
          commented content on the internet.
        </p>
        <NavLink to="/feed/create-post">
          <Button />
        </NavLink>
      </div>
    );
  }
}

export default CreatePostContainer;
