import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import { Route, Switch } from 'react-router-dom';

class Posts extends React.Component {
  state = {
    posts: [],
    // postsLoading: true,
    post: {
      author: '',
      title: '',
      category: ''
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = direction => {
    // if (direction) {
    //   this.setState({ postsLoading: true, posts: [] });
    // }
    // let page = this.state.postPage;
    // if (direction === "next") {
    //   page++;
    //   this.setState({ postPage: page });
    // }
    // if (direction === "previous") {
    //   page--;
    //   this.setState({ postPage: page });
    // }
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
          posts: resData.posts
          //   totalPosts: resData.totalItems,
          //   postsLoading: false
        });
      })
      .catch(this.catchError);
  };

  finishEditHandler = postData => {
    //   this.setState({
    //     editLoading: true
    //   });
    // Set up data (with image!)
    let url = 'http://localhost:8080/feed/create-post';
    let method = 'POST';
    //   if (this.state.editPost) {
    //     url = "URL";
    //   }

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: postData.title,
        content: postData.content
      })
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
          creator: resData.post.author,
          createdAt: resData.post.createdAt
        };
        this.setState(prevState => {
          let updatedPosts = [...prevState.posts, post];
          //   if (prevState.editPost) {
          //     const postIndex = prevState.posts.findIndex(
          //       p => p._id === prevState.editPost._id
          //     );
          //     updatedPosts[postIndex] = post;
          //   } else if (prevState.posts.length < 2) {
          //     updatedPosts = prevState.posts.concat(post);
          //   }
          return {
            posts: updatedPosts
            // isEditing: false,
            // editPost: null,
            // editLoading: false
          };
        });
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   isEditing: false,
        //   editPost: null,
        //   editLoading: false,
        //   error: err
        // });
      });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/feed/posts">
            {this.state.posts.map(post => {
              const { title, content, author, createdAt } = post;
              return (
                <Post
                  title={title}
                  content={content}
                  author={author}
                  createdAt={createdAt}
                />
              );
            })}
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/feed/create-post">
            <CreatePost createNewPost={this.finishEditHandler} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Posts;
