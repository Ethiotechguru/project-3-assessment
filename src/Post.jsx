import React from 'react';
import './App.css';
const Post = props => (
  props.post.map(post => (
    <div className="space App" >
      <h2><span>User Id</span>  {post.userId}</h2>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ))
)


export default Post;