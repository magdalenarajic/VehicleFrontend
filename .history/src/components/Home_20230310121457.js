import React, {Component} from 'react';
import image from '../img/photo4.jpg';
import { Container } from 'react-bootstrap';

export class Home extends Component{

    render(){
      const mystyle = {
        color: "white",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
      };
          return(
            <div style={{ backgroundImage:`url(${image})` , 
             backgroundRepeat:"no-repeat",
             backgroundPosition: "center",
            height:600,width:1200}}>
                <h3 style={mystyle}>
        Welcome!
      </h3>
            </div>
          )
    }
}