import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <div className="button-wrapper">
      <button
        className={props.className === 'create-post' ? 'create-post' : ''}
        onClick={props.onClick}
        value={props.value}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
