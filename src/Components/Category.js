import React from 'react';
import Post from './Post';

import axios from 'axios';

class Category extends React.Component {
  state = {
    postsByCategory: []
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    const category = this.props.match.params.category;
    console.log(category);
    axios
      .get('http://localhost:8080/feed/posts/r/' + category)
      .then(res => {
        console.log(res);
        this.setState(() => ({
          postsByCategory: res.data.post
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.postsByCategory.map(post => {
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
      </div>
    );
  }
}

export default Category;
