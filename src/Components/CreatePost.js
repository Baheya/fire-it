import React from 'react';
import Input from './Input';
import FilePicker from './FilePicker';
import Button from './Button';
import Dropdown from './Dropdown';

import './CreatePost.css';

import { Redirect } from 'react-router-dom';

const POST_FORM = {
  title: {
    value: ''
  },
  image: {
    value: ''
  },
  content: {
    value: ''
  },
  category: {
    value: ''
  }
};

class CreatePost extends React.Component {
  state = {
    postForm: POST_FORM,
    redirect: false
  };
  postInputChangeHandler = (input, value, files) => {
    // if (files) {
    //   generateBase64FromImage(files[0])
    //     .then(b64 => {
    //       this.setState({ imagePreview: b64 });
    //     })
    //     .catch(e => {
    //       this.setState({ imagePreview: null });
    //     });
    // }
    console.log(input, value, files);
    this.setState(prevState => {
      //   let isValid = true;
      //   for (const validator of prevState.postForm[input].validators) {
      //     isValid = isValid && validator(value);
      //   }
      const updatedForm = {
        ...prevState.postForm,
        [input]: {
          ...prevState.postForm[input],
          //   valid: isValid,
          value: files ? files[0] : value
        }
      };
      //   let formIsValid = true;
      //   for (const inputName in updatedForm) {
      //     formIsValid = formIsValid && updatedForm[inputName].valid;
      //   }
      return {
        postForm: updatedForm
        // formIsValid: formIsValid
      };
    });
  };
  acceptPostChangeHandler = e => {
    e.preventDefault();
    const post = {
      title: this.state.postForm.title.value,
      image: this.state.postForm.image.value,
      content: this.state.postForm.content.value,
      category: this.state.postForm.category.value
    };
    console.log(post);
    this.props.createNewPost(post);
    this.setState({
      postForm: POST_FORM,
      redirect: true
      // formIsValid: false,
      // imagePreview: null
    });
  };
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/feed/posts" />;
    }
    return (
      <div className="create-post-content">
        <div className="create-post-header">
          <a href="#" className="drafts">
            DRAFTS
          </a>
          <h1>Create a Post</h1>
        </div>
        <div className="divider">
          <hr />
        </div>
        <div className="form">
          <form>
            <div className="form-content-header">
              <div className="post-tab">
                <i class="fas fa-bars" />
                <a href="#">Post</a>
              </div>
              <div className="image-video-tab">
                <i class="far fa-images" />
                <a href="#">Image & Video</a>
              </div>
              <div className="link-tab">
                <i class="fas fa-link" />
                <a href="#">Link</a>
              </div>
            </div>
            <div className="form-content-container">
              <div className="title-input">
                <Input
                  id="title"
                  // label="Title"
                  type="text"
                  name="title"
                  control="input"
                  placeholder="Title"
                  visibility="hidden"
                  value={this.state.postForm['title'].value}
                  onChange={this.postInputChangeHandler}
                />
              </div>
              <Input
                id="content"
                // label="Content"
                type="textarea"
                rows="5"
                name="content"
                control="textarea"
                placeholder="Enter text here"
                value={this.state.postForm['content'].value}
                onChange={this.postInputChangeHandler}
              />
              <div className="wrapper">
                <FilePicker
                  id="image"
                  // label="Image"
                  control="input"
                  onChange={this.postInputChangeHandler}
                />
                <Dropdown
                  id="category"
                  onChange={this.postInputChangeHandler}
                  value={this.state.postForm['category'].value}
                />
              </div>
              <div className="buttons">
                <a href="#" className="create-draft">
                  CREATE DRAFT
                </a>
                <Button
                  onClick={this.acceptPostChangeHandler}
                  label={'POST'}
                  className="create-post"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
