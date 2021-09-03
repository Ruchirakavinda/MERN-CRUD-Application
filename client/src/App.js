import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts:[]
    };
  }

componentDidMount(){
  this.retrivePost();
}

retrivePost(){
  axios.get('http://localhost:8000/posts').then (res =>{
    if (res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }
  });
}


  render() { 
    return ( 
      <div>
        {this.state.posts.map(posts =>(
          <div>
          <h1>{posts.topic}</h1>
          <h2>{posts.description}</h2>
          <h2>{posts.category}</h2>
          </div>

        ))}
      </div>
     );
  }
}
 
export default App;