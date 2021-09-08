import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer,MDBBtn,MDBIcon,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
   } from 'mdb-react-ui-kit';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<MDBBtn color='dark' href='/staff' >reset</MDBBtn>
         );
    }
}
 
export default Home;