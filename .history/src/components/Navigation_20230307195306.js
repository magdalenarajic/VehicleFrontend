import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
          return(
            <Navbar bg="dark" variant="dark">
            <Nav> 
                <Nav.Link className="d-inline p-2 text-white " href="/" >
                    Home
                </Nav.Link>
                <NavLink className="d-inline p-2 text-white" to="/makes" >
                    Vehicle Makes
                </NavLink>
            </Nav>
           </Navbar>
          )
    }
}