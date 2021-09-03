import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer,
  MDBNavbar,MDBBtn,MDBIcon } from 'mdb-react-ui-kit';

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
<>
    <MDBNavbar light bgColor='light'>
          <MDBContainer>
            <a className='navbar-brand'><h3>My Posts</h3></a>
            <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Search posts' aria-label='Search' />
              <MDBBtn color='dark'>Search</MDBBtn>
            </form>
          </MDBContainer>
        </MDBNavbar>


      <MDBContainer fluid>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 200 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Posts</h1>
              <h4 className='mb-3'>All Posts</h4>
             
            </div>
          </div>
        </div>
      </div>



      <MDBContainer>
        <br/><br/><br/>
      <MDBTable hover>
          <MDBTableHead dark>
            <tr>
              <th scope='col' className='text-center'>#</th>
              <th scope='col' className='text-center'>Topic</th>
              <th scope='col' className='text-center'>Post Description</th>
              <th scope='col' className='text-center'>Post Category</th>
              <th scope='col' className='text-center'>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className='text-center'>
                
                <MDBBtn color="warning">
                <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                </MDBBtn>
                &nbsp; &nbsp; &nbsp;
                <MDBBtn color="danger">
                <MDBIcon icon='trash' size='lg' /> &nbsp;Delete
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className='text-center'>
              <MDBBtn color="warning">
                <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                </MDBBtn>
                &nbsp; &nbsp; &nbsp;
                <MDBBtn color="danger">
                <MDBIcon icon='trash' size='lg' /> &nbsp;Delete
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className='text-center'>
              <MDBBtn color="warning">
                <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                </MDBBtn>
                &nbsp; &nbsp; &nbsp;
                <MDBBtn color="danger">
                <MDBIcon icon='trash' size='lg' /> &nbsp;Delete
                </MDBBtn>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>

      </MDBContainer>
         
      </MDBContainer>
      
    </>
     );
  }
}
 
export default App;