import React, {Component} from 'react';
import image from '../img/photo4.jpg';
import { Container } from 'react-bootstrap';

export class Home extends Component{

    render(){
      const styleH = {
        color: "white",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
      };
      const styleImage = {
        backgroundImage:`url(${image})` , 
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
       height:600,width:1200
      }
          return(
            <div style={styleImage}>
                <h3 style={styleH}>
        Welcome!
      </h3>
            </div>
          )
    }
}