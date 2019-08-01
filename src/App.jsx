import React from 'react';
import './App.css';
import axios from 'axios';
import Post from './Post'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:1,
      posts:[],
    }
    this.handleLeftbtn = this.handleLeftbtn.bind(this);
    this.handleRightbtn = this.handleRightbtn.bind(this);
  }

handleLeftbtn(e){
 
    if(this.state.userId === 1){
      this.state.userId = 10;
    }else{
      this.state.userId--;
    }
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.userId}`).then(result => {
      this.setState({
        posts: result.data,
        userId: this.state.userId
      })
    })
}
handleRightbtn(e){
  
  if(this.state.userId === 10){
    this.state.userId = 1
  }else{
    this.state.userId++;
  }
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.userId}`).then(result => {
      this.setState({
        posts: result.data,
        userId: this.state.userId
      })
    })
}

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=1`).then(result => {
      this.setState({
        posts: result.data
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="App" >
          <button className="button btn-lg"  onClick={this.handleLeftbtn}>&lt;</button>
          <button className="button btn-lg" onClick={this.handleRightbtn}>&gt;</button>
        </div>
        
          <h1 className="App">User Posts</h1>
        <div >
          <Post post={this.state.posts}/>
        </div>
      </div>
    );
  }
}

export default App;
