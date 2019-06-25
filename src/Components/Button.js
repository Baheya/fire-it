import React from "react";

const Button = props => {
  return (
    <div>
      <button onClick={props.onClick}>Create Post</button>
    </div>
  );
};

export default Button;
