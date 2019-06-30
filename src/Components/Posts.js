import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import SinglePost from './SinglePost';
import CreatePostContainer from './CreatePostContainer';
import Category from './Category';
import Spinner from './Spinner';
import { Route, Switch } from 'react-router-dom';

import './Posts.css';

class Posts extends React.Component {
  state = {
    posts: [],
    postsLoading: true
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    fetch('http://localhost:8080/feed/posts')
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch posts.');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({
          posts: resData.posts,
          postsLoading: false
        });
      })
      .catch(this.catchError);
  };

  finishEditHandler = postData => {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);
    formData.append('category', postData.category);
    let url = 'http://localhost:8080/feed/create-post';
    let method = 'POST';
    //   if (this.state.editPost) {
    //     url = "URL";
    //   }

    fetch(url, {
      method: method,
      body: formData
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Creating or editing a post failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        const post = {
          _id: resData.post._id,
          title: resData.post.title,
          content: resData.post.content,
          author: resData.post.author,
          createdAt: resData.post.createdAt,
          category: resData.post.category,
          votes: resData.post.votes,
          comments: resData.post.comments
        };
        this.setState(prevState => {
          let updatedPosts = [...prevState.posts, post];
          return {
            posts: updatedPosts
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="body-container">
        <div className="posts-container">
          {this.state.postsLoading && <Spinner />}
          <Switch>
            <Route exact path="/feed/posts">
              {this.state.posts.map(post => {
                const {
                  title,
                  content,
                  author,
                  createdAt,
                  _id,
                  imageUrl,
                  comments,
                  votes,
                  category
                } = post;
                return (
                  <Post
                    title={title}
                    content={content}
                    author={author.name}
                    createdAt={createdAt}
                    id={_id}
                    key={_id}
                    image={imageUrl}
                    comments={comments}
                    votes={votes}
                    category={category}
                  />
                );
              })}
            </Route>
          </Switch>
          <Switch>
            <Route
              exact
              path="/feed/posts/r/:category"
              render={props => <Category {...props} />}
            />
          </Switch>
          <Switch>
            <Route exact path="/feed/create-post">
              <CreatePost createNewPost={this.finishEditHandler} />
            </Route>
          </Switch>
          <Switch>
            <Route
              path="/feed/post/:postId"
              render={props => <SinglePost {...props} />}
            />
          </Switch>
        </div>
        <CreatePostContainer />
      </div>
    );
  }
}

export default Posts;
