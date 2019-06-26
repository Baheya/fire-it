import React from 'react';

const FilePicker = props => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type="file"
      id={props.id}
      onChange={e => props.onChange(props.id, e.target.value, e.target.files)}
    />
  </div>
);

export default FilePicker;
