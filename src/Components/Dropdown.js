import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          onChange={e => this.props.onChange(this.props.id, e.target.value)}
        >
          <option value="">Please select a category:</option>
          <option value="general">general</option>
          <option value="coding">coding</option>
          <option value="funny">funny</option>
          <option value="tutorials">tutorials</option>
          <option value="news">news</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
