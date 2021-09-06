import React, { Component } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <>
                 <MDBNavbar sticky  light bgColor='light'>
                    <MDBContainer >
                    <MDBNavbarBrand href='/'><h3>Posts.com</h3></MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
            </>
         );
    }
}
 
export default NavBar;