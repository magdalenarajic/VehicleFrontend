import React, {Component} from 'react';
import image from '../img/photo4.jpg';
import { Container } from 'react-bootstrap';

export class Home extends Component{

    render(){
          return(
            <div style={{ backgroundImage:`url(${image})` , 
             backgroundRepeat:"no-repeat",
             backgroundPosition: "center",
            height:600,width:1200}}>
                <h3 className="m-3 d-flex justify-content-center" style={{color: 'white'}}>
        Welcome!
        This is Home Page
      </h3>
            </div>
          )
    }
}