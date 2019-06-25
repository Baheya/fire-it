import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        {this.props.label && (
          <label htmlFor={this.props.id}>{this.props.label}</label>
        )}
        {this.props.control === "input" && (
          <input
            id={this.props.id}
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            onChange={e => this.props.onChange(this.props.id, e.target.value)}
          />
        )}
        {this.props.control === "textarea" && (
          <textarea
            id={this.props.id}
            rows={this.props.rows}
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            onChange={e => this.props.onChange(this.props.id, e.target.value)}
          />
        )}
      </div>
    );
  }
}

export default Input;
