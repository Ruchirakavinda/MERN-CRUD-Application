import React, { Component } from 'react';
import {
    MDBValidation,
    MDBInput,
    MDBBtn,
    MDBContainer
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

class CreatPost extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <header>
                 <div className='pt-5 pb-3 text-center bg-light'>
                    <h1 className='mb-3'>Add New Post</h1>
                    <Link to ="/" className='btn btn-outline-dark btn-lg' href='' role='button'>
                    All Posts
                    </Link>
                   
                </div>
               </header>
            <MDBContainer>
              <MDBValidation className='row g-3 mx-auto' noValidate style={{ maxWidth: '80%', marginTop:"2%" }}>
                <div className='col-7 mx-auto'>
                    <MDBInput
                    name='topic'
                    id='validationCustom01'
                    required
                    label='Post Topic'
                    validation='Please provide a post topic.'
                    invalid
                    />
                </div>
                
                <div className='col-md-7 mx-auto'>
                    <MDBInput
                    name='desc'
                    id='validationCustom03'
                    required
                    label='Post Description'
                    validation='Please provide a post description.'
                    invalid
                    />
                </div>
                <div className='col-md-7 mx-auto'>
                    <MDBInput
                    name='Cate'
                    id='validationCustom05'
                    required
                    label='Post Category'
                    validation='Please provide a post Category.'
                    invalid
                    />
                </div>
                
                <div className='col-7 mx-auto'>
                    <MDBBtn type='submit' color="dark">Add Post</MDBBtn>
                </div>
              </MDBValidation>

            </MDBContainer>
            </>
         );
    }
}
 
export default CreatPost;