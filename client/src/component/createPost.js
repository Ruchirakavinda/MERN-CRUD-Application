import React, { Component } from 'react';
import axios from 'axios';
import {
    MDBValidation,
    MDBInput,
    MDBBtn,
    MDBContainer,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBCardTitle
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import staff from '../img/staff.jpg';

class CreatPost extends Component {
    constructor(props){
        super(props);

        this.state = {

            basicModal:false,


            topic : "",
            description:"",
            category:""


        }
    }



    toggleShow = () => {
        this.setState({
            basicModal:false,
        })
    }



    inputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value

        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();

        const {topic,description,category}= this.state;
        const val1 = document.form01.topic.value;
        const val2 = document.form01.description.value;
        const val3 = document.form01.category.value;

        if(val1!=="" && val2!=="" && val3!==""){
            const data = {
                topic:topic,
                description:description,
                category:category,
            }
            console.log(data);



            axios.post("/post/save",data).then((res) =>{
                if(res.data.success){
                    this.setState(
                        {
                            basicModal:true,

                            topic : "",
                            description:"",
                            category:""
                        }
                    )

                }
            })


        }
        
    }
    render() { 
        return ( 
            <>
            <header>
            <div
              className='p-5 text-center bg-image'
              style={{ backgroundImage:` url(${staff})`, height: 200 }}
            >
              <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <div className='text-white'>
                    <h1 className='mb-3'>Add New Staff Memeber</h1>
                    <Link to="/non-academic" className='btn btn-outline-light btn-lg' href='#!' role='button'>
                      All Members
                    </Link>
                  
                  </div>
                </div>
              </div>
            </div>
               </header>
            <MDBContainer style={{paddingBottom:'100px'}}>
            
              <MDBValidation name="form01" className='row g-3 mx-auto' noValidate style={{ maxWidth: '80%', marginTop:"2%",textAlign:'center' }}>
              <MDBCardTitle className="mx-auto">Add Memeber Details</MDBCardTitle>
                <div className='col-7 mx-auto'>
                    <MDBInput
                    name='topic'
                    id='validationCustom01'
                    required
                    label='Post Topic'
                    validation='Please provide a post topic.'
                    invalid
                    value={this.state.topic}
                    onChange={this.inputChange}
                    />
                </div>
                
                <div className='col-7 mx-auto'>
                    <MDBInput
                    textarea rows={4} 
                    name='description'
                    id='validationCustom02'
                    required
                    label='Post Description'
                    validation='Please provide a post description.'
                    invalid
                    value={this.state.description}
                    onChange={this.inputChange}
                    />
                </div>
                <div className='col-7 mx-auto'>
                    <MDBInput
                    name='category'
                    id='validationCustom03'
                    required
                    label='Post Category'
                    validation='Please provide a post category.'
                    invalid
                    value={this.state.category}
                    onChange={this.inputChange}
                    />
                </div>
                
                <div className='col-7 mx-auto'>
                    <MDBBtn type='submit' color="dark" onClick={this.onSubmit}>Add Post</MDBBtn>
                </div>
              </MDBValidation>

            </MDBContainer>





            <MDBModal staticBackdrop show={this.state.basicModal} tabIndex='-1'>
            <MDBModalDialog size='xl'>
                <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle className='mx-auto'>New Member added successfuly ! &nbsp; &nbsp;
                    <MDBBtn color='warning' onClick={this.toggleShow} className='mx-auto' href='/non-academic'> OK
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
 
export default CreatPost;