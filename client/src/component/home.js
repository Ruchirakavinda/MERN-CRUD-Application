import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer,MDBBtn,MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {

      warningModal:false,

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


toggleShow = () => {
  this.setState({
      warningModal:true,
  })
}

toggleHide = () => {
  this.setState({
      warningModal:false,
  })
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
              <h1 className='mb-3'>Your Posts</h1>
              <h4 className='mb-3'>All Posts</h4>
              <Link to="/add" className='btn btn-outline-light btn-lg' href='#!' role='button'>
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
                      <th className='text-center' style={{color:"black",paddingTop:"20px"}}>{posts.topic}</th> 
                  </Link>
                  <td className='text-center' style={{width:"35%"}}>{posts.description}</td> 
                  <td className='text-center'>{posts.category}</td>
                  <td className='text-center' style={{width:"25%"}}> 
                  <MDBBtn color="warning" href={`/edit/${posts._id}`}>
                    <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                    </MDBBtn>
                    &nbsp; &nbsp; &nbsp;
                    <MDBBtn color="danger"  onClick={this.toggleShow}>
                    <MDBIcon icon='trash' size='lg'/> &nbsp;Delete
                    </MDBBtn>
                  </td>
                 
               </tr>
               

              ))}

          </MDBTableBody>
        </MDBTable>
        <br/><br/><br/>
      </MDBContainer>
      </MDBContainer>
      


      
      <MDBModal staticBackdrop tabIndex='-1' show={this.state.warningModal} >
        <MDBModalDialog size='sm' centered>
          <MDBModalContent>
          <MDBModalHeader>
                    <MDBModalTitle className='mx-auto'>Delete Post
                    </MDBModalTitle>
                </MDBModalHeader>
            
            <MDBModalBody style={{textAlign:'center',padding:'10px 0px 0px 0px'}}>
              <p>
                Are you sure ?
              </p>
              </MDBModalBody>

              <MDBModalBody style={{textAlign:'center',padding:'0px 0px 20px 0px'}}>
              <MDBBtn color='light'  className='mx-auto' onClick={this.toggleHide}>
                cancel
                </MDBBtn>
                &nbsp; &nbsp; &nbsp;
              <MDBBtn color='warning' onClick={this.toggleHide} className='mx-auto'>
                OK
              </MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
     );
  }
}
 
export default Home;