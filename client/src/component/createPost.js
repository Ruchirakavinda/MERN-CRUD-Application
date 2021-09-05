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
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

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
                 <div className='pt-5 pb-3 text-center bg-light'>
                    <h1 className='mb-3'>Add New Post</h1>
                    <Link to ="/" className='btn btn-outline-dark btn-lg' href='' role='button'>
                    All Posts
                    </Link>
                   
                </div>
               </header>
            <MDBContainer>
              <MDBValidation name="form01" className='row g-3 mx-auto' noValidate style={{ maxWidth: '80%', marginTop:"2%" }}>
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
                    <MDBModalTitle className='mx-auto'>Post added successfuly ! &nbsp; &nbsp;
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
 
export default CreatPost;