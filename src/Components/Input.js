import React from 'react';

import './Input.css';

class Input extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.control === 'input'
            ? 'input-container'
            : 'textarea-container'
        }
      >
        {/* {this.props.label && (
          <label htmlFor={this.props.id}>{this.props.label}</label>
        )} */}
        {this.props.control === 'input' && (
          <input
            id={this.props.id}
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={e => this.props.onChange(this.props.id, e.target.value)}
          />
        )}
        {this.props.control === 'textarea' && !this.props.comment && (
          <div>
            <div className="textarea-header">
              <i class="fas fa-bold" />
              <i class="fas fa-italic" />
              <i class="fas fa-link" />
              <i class="fas fa-strikethrough" />
              <i class="fas fa-code" />
              <i class="fas fa-superscript" />
              <i class="fas fa-exclamation-circle" />
              <i class="fas fa-heading" />
              <i class="fas fa-list-ul" />
              <i class="fas fa-list-ol" />
              <i class="fas fa-quote-right" />
              <i class="fas fa-file-code" />
              <i class="fas fa-table" />
              <i class="fas fa-image" />
              <i class="fas fa-video" />
              <a href="#">Switch to markdown</a>
            </div>
            <textarea
              id={this.props.id}
              rows={this.props.rows}
              type={this.props.type}
              name={this.props.name}
              value={this.props.value}
              placeholder={this.props.placeholder}
              onChange={e => this.props.onChange(this.props.id, e.target.value)}
            />
          </div>
        )}
        {this.props.control === 'textarea' && this.props.comment && (
          <div>
            <textarea
              id={this.props.id}
              rows={this.props.rows}
              type={this.props.type}
              name={this.props.name}
              value={this.props.value}
              placeholder={this.props.placeholder}
              onChange={e => this.props.onChange(this.props.id, e.target.value)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Input;
