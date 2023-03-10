import React, {Component} from 'react';
import image from '../img/photo3.jpg';
import { Container } from 'react-bootstrap';

export class Home extends Component{

    render(){
          return(
            <Container> 
            <div style={{ backgroundImage:`url(${image})` ,
             backgroundSize:"cover", 
             backgroundRepeat:"no-repeat",
             backgroundPosition: 'center',
            height:600,width:1100}}>
                <h3 className="m-3 d-flex justify-content-center" style={{backgroundColor: 'grey'}}>
        Welcome!
        This is Home Page
      </h3>
            </div>
            </Container>
          )
    }
}