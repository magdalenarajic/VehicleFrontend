import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
          return(
            <Navbar bg="dark" variant="dark">
           
            <Nav> 
                <NavLink className="text-white" to="/" >
                    Home
                </NavLink>
                <NavLink className="text-white" to="/makes" >
                    Vehicle Makes
                </NavLink>
            </Nav>
           </Navbar>
          )
    }
}