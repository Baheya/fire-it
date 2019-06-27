import React from 'react';
import Button from './Button';

class CreateComment extends React.Component {
  render() {
    return (
      <div>
        <Button label={'Add Comment'} onClick={this.props.addComment} />
      </div>
    );
  }
}

export default CreateComment;
