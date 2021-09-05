import React, { Component } from 'react';
import { MDBContainer,MDBNavbar,MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <>
                <MDBNavbar light bgColor='light'>
                <MDBContainer>
                    <Link to='/' className='navbar-brand'><h3>Posts.Com</h3></Link>
                    <form className='d-flex input-group w-auto'>
                    <input type='search' className='form-control' placeholder='Search posts' aria-label='Search' />
                    <MDBBtn color='dark'>Search</MDBBtn>
                    </form>
                </MDBContainer>
                </MDBNavbar>
            </>
         );
    }
}
 
export default NavBar;