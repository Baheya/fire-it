import React from 'react';

import './FilePicker.css';

const FilePicker = props => (
  <div className="filepicker">
    {/* <label htmlFor={props.id}>{props.label}</label> */}
    <input
      type="file"
      id={props.id}
      onChange={e => props.onChange(props.id, e.target.value, e.target.files)}
    />
  </div>
);

export default FilePicker;
