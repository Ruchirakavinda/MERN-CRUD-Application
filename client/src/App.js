import { MDBContainer } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreatPost from './component/createPost';
import EditPost from './component/editPost';
import Home from './component/home';
import NavBar from './component/navbar';
import PostDetails from './component/postDetails';

class App extends Component {
  state = {  }
  render() { 
    return (
      <BrowserRouter>

      <MDBContainer fluid style={{padding:'0px'}}>

        <NavBar/>

        <Route path ="/" exact component={Home}></Route>

        <Route path ="/add" component={CreatPost}></Route>

        <Route path ="/edit/:id" component={EditPost}></Route>

        <Route path ="/post/:id" component={PostDetails}></Route>

      </MDBContainer>

      </BrowserRouter>
      );
  }
}
 
export default App;