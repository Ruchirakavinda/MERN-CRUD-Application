import React, { Component } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer,MDBBtn,MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
 } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {

      id2:'',

      warningModal:false,

      basicModal:false,

      posts:[]
    };
  }

  

componentDidMount(){
  this.retrivePost();
}

retrivePost(){
  axios.get('/posts').then (res =>{
    if (res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }
  });
}


warningShow = (id) => {

  this.setState({
    warningModal:true,
    id2:id
    
  });
  
  
}

warningHide = () => {
  this.setState({
      warningModal:false,
  })
}

toggleShow = () => {
  this.setState({
      basicModal:false,
  })
}


filterData(posts,searchKey){

  const result = posts.filter((e) =>
  e.topic.toLowerCase().includes(searchKey) ||
  e.description.toLowerCase().includes(searchKey) ||
  e.category.toLowerCase().includes(searchKey)
  
  );

  this.setState({posts:result})
}



handleSearch = (e) =>{
  const searchKey = e.currentTarget.value

  axios.get('/posts').then (res =>{
    if (res.data.success){
    
      this.filterData(res.data.existingPosts,searchKey)
    }
  });

}

onDelete =(id3)=>{
 this.warningHide();
  axios.delete(`/post/delete/${id3}`).then((res)=>{
    this.setState(
      {
          basicModal:true,
      })
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
              <MDBIcon fas icon="user-plus" size='lg' />&nbsp; &nbsp;
                Add New Post
              </Link>
             
            </div>
          </div>
        </div>
      </div>



      <MDBContainer>
        <br/><br/>
        <div className="d-flex justify-content-between">
        <MDBBtn onClick={() => window.location.reload(false)} color='light'> <MDBIcon fas icon="sync-alt" size='lg' /></MDBBtn>
        <form className='d-flex input-group ' style={{width:"500px"}} >
              <input type='search' className='form-control' placeholder='Search post' aria-label='Search' onChange={this.handleSearch} />
              <MDBBtn color='dark' >reset</MDBBtn>
        </form>
        </div>
        
        <br/>
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
                    <MDBBtn color="danger"  onClick={()=>this.warningShow(posts._id)}>
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
              <MDBBtn color='light'  className='mx-auto' onClick={this.warningHide}>
                cancel
                </MDBBtn>
                &nbsp; &nbsp; &nbsp;
              <MDBBtn color='warning' onClick={() =>this.onDelete(this.state.id2)} className='mx-auto'>
                OK
              </MDBBtn>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



       
      <MDBModal staticBackdrop show={this.state.basicModal} tabIndex='-1'>
            <MDBModalDialog size='xl'>
                <MDBModalContent >
                <MDBModalHeader>
                    <MDBModalTitle className='mx-auto'>Post deleted successfuly ! &nbsp; &nbsp;
                    <MDBBtn color='warning' onClick={this.toggleShow} className='mx-auto' href='/'> OK
                    </MDBBtn>
                    </MDBModalTitle>
                </MDBModalHeader>
                </MDBModalContent>
            </MDBModalDialog>
            </MDBModal>
    </>
     );
  }
}
 
export default Home;