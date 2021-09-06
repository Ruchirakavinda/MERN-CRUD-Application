import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer,MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol,MDBBtn,MDBIcon,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,   } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state = {

            warningModal:false,

            basicModal:false,

            post:{}
          };

    }
    
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){

                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
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




    
 warningShow = () => {

    this.setState({
      warningModal:true,      
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


    render() { 

        const {topic,description,category}= this.state.post;


        return ( 
            <>
            <header>
                 <div className='pt-5 pb-3 text-center bg-light'>
                    <h1 className='mb-3'>Post Details</h1>
                    <Link to ="/" className='btn btn-outline-dark btn-lg' href='' role='button'>
                    All Posts
                    </Link>
                   
                </div>
               </header>
            <MDBContainer>
                
            <MDBCard style={{ maxWidth: '60%', marginTop:"2%" }} className="mx-auto">
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>Post Topic</MDBCardTitle>
                        <MDBCardText>
                        {topic}
                        </MDBCardText>
                        <MDBCardTitle>Post Description</MDBCardTitle>
                        <MDBCardText>
                        {description}
                        </MDBCardText>
                        <MDBCardTitle>Post Category</MDBCardTitle>
                        <MDBCardText>
                        {category}
                        </MDBCardText>
                        <MDBCardText className='pt-5'>
                            <MDBBtn color="warning" href={`/edit/${this.props.match.params.id}`}>
                            <MDBIcon icon='feather-alt' size='lg' /> &nbsp;Edit
                            </MDBBtn>
                            &nbsp; &nbsp; &nbsp;
                            <MDBBtn color="danger" onClick={() => this.warningShow()}>
                            <MDBIcon icon='trash' size='lg' /> &nbsp;Delete
                            </MDBBtn>
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCol>
                   
                </MDBRow>
                </MDBCard>
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
              <MDBBtn color='warning' onClick={() =>this.onDelete(this.props.match.params.id)} className='mx-auto'>
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
 
export default PostDetails;