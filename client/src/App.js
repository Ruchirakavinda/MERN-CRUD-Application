import { MDBContainer } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreatPost from './component/createPost';
import EditPost from './component/editPost';
import Home from './component/home';
import NavBar from './component/navbar';
import PostDetails from './component/postDetails';
import StaffHome from './component/staffHome';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div className='app'>
      <BrowserRouter>

      <MDBContainer fluid style={{padding:'0px'}}>

        <NavBar/>

        <Route path ="/" exact component={Home}></Route>

        <Route path ="/non-academic" exact component={StaffHome}></Route>

        <Route path ="/add" component={CreatPost}></Route>

        <Route path ="/edit/:id" component={EditPost}></Route>

        <Route path ="/member/:id" component={PostDetails}></Route>

      </MDBContainer>

      </BrowserRouter>
      </div>
      );
  }
}
 
export default App;