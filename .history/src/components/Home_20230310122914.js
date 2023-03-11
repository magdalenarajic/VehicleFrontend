import React, {Component} from 'react';
import image from '../img/photo1.jpg';

export class Home extends Component{

    render(){
      const styleImage = {
        backgroundImage:`url(${image})` , 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '1000',
        height: '100vh'
      }
          return(
            <div style={styleImage}>
             
            </div>
          )
    }
}