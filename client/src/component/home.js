import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer,MDBBtn,MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

class Home extends Component {
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

      <MDBContainer fluid style={{padding:'0px'}}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 200 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Posts</h1>
              <h4 className='mb-3'>All Posts</h4>
              <Link className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Add New Post
              </Link>
             
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
            
              {this.state.posts.map((posts,index) =>(
                
                
                <tr>
                   
                  <th className='text-center' scope='row'>{index+1}</th>
                  <Link to ={`/post/${posts._id}`}>
                      <td className='text-center' style={{color:"black",paddingTop:"20px"}}>{posts.topic}</td> 
                  </Link>
                  <td className='text-center' style={{width:"35%"}}>{posts.description}</td> 
                  <td className='text-center'>{posts.category}</td>
                  <td className='text-center' style={{width:"25%"}}> 
                  <MDBBtn color="warning">
                    <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                    </MDBBtn>
                    &nbsp; &nbsp; &nbsp;
                    <MDBBtn color="danger">
                    <MDBIcon icon='trash' size='lg' /> &nbsp;Delete
                    </MDBBtn>
                  </td>
                 
               </tr>
               

              ))}

          </MDBTableBody>
        </MDBTable>
        <br/><br/><br/>
      </MDBContainer>
      </MDBContainer>
      
    </>
     );
  }
}
 
export default Home;