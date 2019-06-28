import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import Comments from './Comments';
import CreateComment from './CreateComment';
import Input from './Input';
import Button from './Button';

class SinglePost extends React.Component {
  state = {
    title: '',
    author: '',
    date: '',
    image: '',
    content: '',
    id: '',
    comment: '',
    comments: [],
    votes: 0,
    category: ''
  };

  componentDidMount() {
    this.loadPost();
  }

  //   loadComments = postId => {
  //     axios
  //       .get(`http://localhost:8080/feed/post/${postId}/comments`)
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };

  loadPost = () => {
    const postId = this.props.match.params.postId;
    axios
      .get('http://localhost:8080/feed/post/' + postId)
      //   .then(res => {
      //     if (res.status !== 200) {
      //       throw new Error('Failed to fetch status');
      //     }
      //     return res.json();
      //   })
      .then(res => {
        console.log(res);
        this.setState(() => ({
          title: res.data.post.title,
          author: res.data.post.author.name,
          image: 'http://localhost:8080/' + res.data.post.imageUrl,
          date: new Date(res.data.post.createdAt).toLocaleDateString(),
          content: res.data.post.content,
          id: res.data.post._id,
          comments: res.data.post.comments,
          votes: res.data.post.votes,
          category: res.data.post.category
        }));
      })
      // .then(res => {
      //   return axios
      //     .get('http://localhost:8080/feed/post/' + postId + '/comments')
      //     .then(res => {
      //       this.setState({
      //         comments: res.data.comments
      //       });
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // })
      .catch(err => {
        console.log(err);
      });
  };

  commentChangeHandler = (input, value) => {
    this.setState(() => ({
      comment: value
    }));
  };

  createComment = commentData => {
    const content = commentData.comment;
    const postId = this.props.match.params.postId;
    axios
      .post('http://localhost:8080/feed/post/' + postId, {
        content: content,
        postId: postId
      })
      .then(res => {
        console.log(res);
        let updatedComment = res.data.comment;
        console.log(updatedComment);
        if (this.state.comments.length > 0) {
          this.setState(
            prevState => (
              {
                comments: [...prevState.comments, updatedComment]
              },
              () => console.log(this.state.comments)
            )
          );
        } else {
          this.setState(() => ({
            comments: [updatedComment]
          }));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  addComment = e => {
    e.preventDefault();
    const comment = {
      comment: this.state.comment
    };
    console.log(comment);
    this.createComment(comment);
    this.setState({
      comment: ''
    });
  };

  submitVote = () => {
    const postId = this.props.match.params.postId;
    const votes = this.state.votes;
    console.log(postId, votes);
    axios
      .post('http://localhost:8080/feed/post/' + postId + '/voted', {
        votes: votes,
        postId: postId
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveVote = e => {
    e.preventDefault();
    if (e.target.value === 'up') {
      this.setState(
        {
          votes: this.state.votes + 1
        },
        () => {
          this.submitVote();
        }
      );
    } else if (e.target.value === 'down') {
      this.setState(
        {
          votes: this.state.votes - 1
        },
        () => {
          this.submitVote();
        }
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <a href="#">{`r/${this.state.category}`}</a>
          <span>
            Posted by {this.state.author} at {this.state.createdAt}
          </span>
          <NavLink to={`/feed/post/${this.state.id}`}>
            <h1>{this.state.title}</h1>
          </NavLink>
          <img src={this.state.image} />
          <p>{this.state.content}</p>
          <p>{this.state.comments.length} Comments</p>
          <Button onClick={this.saveVote} label="+" value="up" />
          <p>{this.state.votes} Votes</p>
          <Button onClick={this.saveVote} label="-" value="down" />
        </div>
        <Input
          id="content"
          label="Add Comment here:"
          type="textarea"
          value={this.state.comment}
          control="textarea"
          onChange={this.commentChangeHandler}
        />
        <CreateComment addComment={this.addComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default SinglePost;
