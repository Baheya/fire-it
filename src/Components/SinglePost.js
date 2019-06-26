import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class SinglePost extends React.Component {
  state = {
    title: '',
    author: '',
    date: '',
    image: '',
    content: '',
    id: ''
  };

  componentDidMount() {
    this.loadPost();
  }

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
        this.setState({
          title: res.data.post.title,
          author: res.data.post.author.name,
          image: 'http://localhost8080/' + res.data.post.imageUrl,
          date: new Date(res.data.post.createdAt).toLocaleDateString(),
          content: res.data.post.content,
          id: res.data.post._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <a href="#">r/category</a>
        <span>
          Posted by {this.state.author} at {this.state.createdAt}
        </span>
        <NavLink to={`/feed/post/${this.state.id}`}>
          <h1>{this.state.title}</h1>
        </NavLink>
        <img src={this.state.image} />
        <p>{this.state.content}</p>
        <span>2 Comments</span>
        <span>4 Votes</span>
      </div>
    );
  }
}

export default SinglePost;
